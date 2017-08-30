/**
 * Created by jayu on 2017/8/24.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";

import HomeComponent from './HomeComponent'
import AboutComponent from './AboutComponent'
import GirlComponent from "./GirlComponent";

export default class TabComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (<TabNavigator>
            {/*---- 主页 ------*/}
            <TabNavigatorItem
                title='主页'
                titleStyle={styles.textStyle}
                selectedTitleStyle={styles.selectedTextStyle}
                selected={this.state.selectedTab === 'home'}
                renderIcon={() => <Image
                    style={styles.iconStyle}
                    source={require('Nank/drawables/tabbar_sp_unselected.png')}/>}
                renderSelectedIcon={() => <Image
                    style={styles.iconStyle}
                    source={require('Nank/drawables/tabbar_sp_selected.png')}/>}
                onPress={() => {
                    this.setState({
                        selectedTab: 'home'
                    });
                }}>
                <HomeComponent/>
            </TabNavigatorItem>

            {/*---  美图 ----*/}
            <TabNavigatorItem
                title='美图'
                titleStyle={styles.textStyle}
                selectedTitleStyle={styles.selectedTextStyle}
                selected={this.state.selectedTab === 'girl'}
                renderIcon={() => <Image
                    style={styles.iconStyle}
                    source={require('Nank/drawables/tabbar_zb_unselected.png')}/>}
                renderSelectedIcon={() => <Image
                    style={styles.iconStyle}
                    source={require('Nank/drawables/tabbar_zb_selected.png')}/>}
                onPress={() => {
                    this.setState({
                        selectedTab: 'girl'
                    });
                }}>
                <GirlComponent/>
            </TabNavigatorItem>

            {/*------- 关于 --------*/}
            <TabNavigatorItem
                title='关于'
                titleStyle={styles.textStyle}
                selectedTitleStyle={styles.selectedTextStyle}
                selected={this.state.selectedTab === 'about'}
                renderIcon={
                    () => <Image
                        style={styles.iconStyle}
                        source={require('Nank/drawables/tabbar_fx_unselected.png')}/>}
                renderSelectedIcon={
                    () => <Image
                        style={styles.iconStyle}
                        source={require('Nank/drawables/tabbar_fx_selected.png')}/>}
                onPress={() => {
                    this.setState({
                        selectedTab: 'about'
                    });
                }}>
                <AboutComponent/>
            </TabNavigatorItem>
        </TabNavigator>);
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
    }
});