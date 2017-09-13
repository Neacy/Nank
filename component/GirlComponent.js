/**
 * Created by jayu on 2017/8/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    RefreshControl,
    Image,
    ToastAndroid,
    TouchableHighlight
} from 'react-native';

import {BASE_URL, DATA_ALL_URL, GIRL_URL} from '../component/util/UrlUtils'
import {commonStyles, ItemStyles} from '../component/util/CommonStyles'

import {StackNavigator} from 'react-navigation';

let pageNum = 1;
let _key = 0;

export default class GirlComponent extends Component {

    static navigationOptions = {
        headerTitle: '美女'
    };

    constructor(props) {
        super(props);
        this.state = {
            datas: null,
            isRefresh: false
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let url = GIRL_URL + pageNum;
        fetch(url).then((response) => response.json())
            .then((responseData) => {
                let responses = responseData.results;
                let results = [];
                responses.map((item) => {
                    results.push({
                        key: _key,
                        value: item
                    });
                    _key++;
                })
                this.setState({
                    datas: pageNum == 1 ? results : this.state.datas.concat(results),
                    isRefresh: false
                });
            })
            .catch((error) => {
                console.log(error.toString());
                ToastAndroid.show(error.toString(), ToastAndroid.LONG);
            })
            .done();
    }

    _onRefresh = () => {
        if (this.state.datas == null) return
        this.setState({
            isRefresh: true,
            datas: this.state.datas
        });
        pageNum = 1;
        _key = 0;
        this.fetchData();
    }

    _onEndReached = () => {
        if (this.state.datas == null) return
        pageNum++;
        this.fetchData();
    }

    _onPress(_url) {
        this.props.navigation.navigate('GirlInfo', {
            imageUrl: _url
        });
    }

    _renderItem = (item) => {
        let positoin = item.index;
        let url = item.item.value.url;
        if (positoin % 2 == 0) {
            return <TouchableHighlight
                underlayColor='gainsboro'
                style={ItemStyles.imageViewLeftStyle}
                onPress={() => {
                    this._onPress(url)
                }}>
                <Image style={ItemStyles.imageHorizontalStyle}
                       source={{uri: url}}
                />
            </TouchableHighlight>;
        }
        return <TouchableHighlight
            underlayColor='gainsboro'
            style={ItemStyles.imageViewRightStyle}
            onPress={() => {
                this._onPress(url)
            }}>
            <Image style={ItemStyles.imageHorizontalStyle}
                   source={{uri: url}}
            />
        </TouchableHighlight>;
    }

    render() {
        if (this.state.datas == null) {
            return <Text>数据加载中..</Text>;
        }
        return <FlatList
            styles={commonStyles.listContainer}
            data={this.state.datas}
            numColumns={2}
            renderItem={this._renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefresh}
                    colors={['blue', 'red', 'black']}
                    onRefresh={this._onRefresh}/>
            }
            onEndReachedThreshold={1 / this.state.datas.length}
            onEndReached={this._onEndReached}
        />;
    }
}