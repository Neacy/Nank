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
    Dimensions
} from 'react-native';

import {StackNavigator} from 'react-navigation'

export default class GirlInfoComponent extends Component {

    static navigationOptions = {
        headerTitle: '图片详情页'
    }

    render() {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        let url = this.props.navigation.state.params.imageUrl
        return <Image style={{width: width, height: height}}
                      source={{uri: url}}/>;
    }
}