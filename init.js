/**
 * Created by jayu on 2017/8/24.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import TabComponent from './component/TabComponent';
import GirlComponent from './component/GirlComponent';
import GirlInfoComponent from './component/GirlInfoComponent';

import {StackNavigator} from 'react-navigation';


export default class Nank extends Component {
    render() {
        return (
            <TabComponent/>
        );
    }
}