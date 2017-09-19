/**
 * Created by jayu on 2017/8/24.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

import HomeComponent from './HomeComponent'
import AboutComponent from './AboutComponent'
import GirlComponent from "./GirlComponent";
import GirlInfoComponent from "./GirlInfoComponent";
import HomeInfoComponent from "./HomeInfoComponent";

import {StackNavigator, TabNavigator} from 'react-navigation';


const TabsNavigator = TabNavigator({
    Home: {
        screen: HomeComponent,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (<Image source={require('../drawables/tabbar_sp_unselected.png')} style={[
                {
                    tintColor: tintColor
                },
                styles.icon
            ]}/>),
            tabBarLabel: '主页'
        }
    },
    Girl: {
        screen: GirlComponent,
        navigationOptions: {
            tabBarLabel: '美女',
            tabBarIcon: ({tintColor}) => (<Image source={require('../drawables/tabbar_zb_unselected.png')} style={[
                {
                    tintColor: tintColor
                },
                styles.icon
            ]}/>)
        }
    },
    About: {
        screen: AboutComponent,
        navigationOptions: {
            tabBarLabel: '关于',
            tabBarIcon: ({tintColor}) => (<Image source={require('../drawables/tabbar_fx_unselected.png')} style={[
                {
                    tintColor: tintColor
                },
                styles.icon
            ]}/>)
        }
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#262626', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, //显示icon
        showLabel: true,
        indicatorStyle: {
            height: 0
        },
        style: {
            backgroundColor: '#F5F5F5', // TabBar 背景色
            height: 50
        },
        tabStyle: {
            padding: 0
        },
        labelStyle: {
            fontSize: 12,
            color: 'gray',
            padding: 0,
            margin: 0// 需要增加margin = 0  不然界面tab对应的字会偏下
        }
    }
});


const APP = StackNavigator({
    Main: {screen: TabsNavigator},
    GirlInfo: {screen: GirlInfoComponent},
    HomeInfo: {screen: HomeInfoComponent}
});

export default class TabComponent extends Component {

    render() {
        return <APP/>
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 26,
        height: 26
    },
    textStyle: {
        color: 'gray'
    },
    selectedTextStyle: {
        color: 'blue'
    },
    icon: {
        height: 22,
        width: 22,
    }
});