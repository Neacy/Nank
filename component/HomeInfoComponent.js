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
    WebView,
    ToastAndroid,
    Dimensions,
} from 'react-native';

import {StackNavigator} from 'react-navigation'

export default class HomeInfoComponent extends Component {

    static navigationOptions = {
        headerTitle: '内容详情页'
    }

    _renderLoading = () => {
        return <Text>网页loading..</Text>
    }

    render() {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        let web = this.props.navigation.state.params.webUrl;
        return <WebView style={styles.container}
                        javaScriptEnabled={true}
                        renderLoading={this._renderLoading}
                        source={{uri: web}}/>;
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});