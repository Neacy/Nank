/**
 * Created by jayu on 2017/8/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

// 直接把NText当做是一个View引入包
import NText from '../component/custom/NReactTextComponent'

export default class AboutComponent extends Component {
    static navigationOptions = {
        headerTitle: '关于'
    };

    render() {
        return (<View style={{flex: 1}}>
            <NText
                style={{width: 100, height: 100}}
                radius='100'
                color='red'/>
        </View>);
    }
}