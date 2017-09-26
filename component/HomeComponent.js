/**
 * Created by jayu on 2017/8/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ToastAndroid,
    RefreshControl,
    TouchableHighlight,
    NativeModules
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import HomeItemComponent from './HomeItemComponent'
import HomeItemNoImageComponent from './HomeItemNoImageComponent'

import {BASE_URL, DATA_ALL_URL, GIRL_URL} from '../component/util/UrlUtils'
import {commonStyles} from '../component/util/CommonStyles'

// 引入原生的module 主要是用于网络请求
const HttpRequestManager = NativeModules.HttpRequestManager;

const ITEM_HEIGHT = 120;
// 当前请求的页数
let pageNum = 1;
let _key = 0;
export default class HomeComponent extends Component {

    static navigationOptions = {
        headerTitle: '主页'
    };

    constructor(props) {
        super(props);
        this.state = {
            datas: null,
            isRefresh: false
        };
    }

    /**
     * 组件渲染完毕的时候
     */
    componentDidMount() {
        // this.fetchData();
        HttpRequestManager.doRequestGankList(pageNum, (results) => {
            let dataResult = [];
            results.map((item) => {
                dataResult.push({
                    key: _key,
                    value: item
                })
                _key++;
            });

            this.setState({
                datas: pageNum == 1 ? dataResult : this.state.datas.concat(dataResult),
                isRefresh: false
            })
        })
    }

    /**
     * 请求网络按页读取数据
     */
    fetchData() {
        let url = DATA_ALL_URL + pageNum;
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                let dataOrigin = responseData.results;
                let dataResult = [];
                dataOrigin.map((item) => {
                    dataResult.push({
                        key: _key,
                        value: item
                    })
                    _key++;
                });

                this.setState({
                    datas: pageNum == 1 ? dataResult : this.state.datas.concat(dataResult),
                    isRefresh: false
                })
            })
            .catch((error) => {
                console.log(error.toString());
                ToastAndroid.show(error.toString(), ToastAndroid.LONG);
            })
            .done();
    }

    /**
     * 下拉刷新
     */
    _onRefresh = () => {
        if (this.state.datas == null) return
        this.setState({
            datas: this.state.datas,
            isRefresh: true
        });

        pageNum = 1;
        _key = 0;
        /*--- 置为重新开始请求数据 ---*/
        this.fetchData();
    }

    /**
     * 加载更多
     */
    _onEndReached = () => {
        if (this.state.datas == null) return
        pageNum += 1;
        this.fetchData();
    }

    /**
     * 每一项补上数据
     */
    _renderItem = (item) => {
        let {_id, createdAt, desc, images: _images, publishedAt, source, type, url, used, who} = item.item.value;
        console.log(_images == null);
        if (_images == null) {/*--- 如果没有图片的话 ---*/
            return <HomeItemNoImageComponent who={who}
                                             desc={desc}
                                             itemPress={() => {
                                                 this.props.navigation.navigate('HomeInfo', {
                                                     webUrl: url
                                                 });
                                             }}/>
        }

        console.log(_images[0]);
        return <HomeItemComponent imageUrl={_images[0]}
                                  who={who}
                                  desc={desc}
                                  itemPress={() => {
                                      this.props.navigation.navigate('HomeInfo', {
                                          webUrl: url
                                      });
                                  }}/>
    }

    /**
     * divider线
     */
    _separator = () => {
        return <View style={
            {
                height: 0.5,
                backgroundColor: 'gray'
            }
        }/>
    }

    _getItemLayout = (data: any, index: number) => {
        return getItemLayout(data, index, this.state.horizontal);
    };

    render() {
        if (this.state.datas == null || this.state.datas.length == 0) {
            return <Text>数据加载中...</Text>
        }
        return (<FlatList
            styles={commonStyles.listContainer}
            ItemSeparatorComponent={this._separator}
            data={this.state.datas}
            renderItem={this._renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefresh}
                    colors={['blue', 'red', 'black']}
                    onRefresh={this._onRefresh}/>
            }
            onEndReachedThreshold={1 / this.state.datas.length}
            onEndReached={this._onEndReached}
            getItemLayout={(data, index) => (
                {length: ITEM_HEIGHT, offset: (ITEM_HEIGHT + 0.5) * index, index}
            )}
        />);
    }
}