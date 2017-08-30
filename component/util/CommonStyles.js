/**
 * Created by jayu on 2017/8/25.
 */

import React from 'react';
import {
    StyleSheet
} from 'react-native';

export const commonStyles = StyleSheet.create({
    listContainer: {
        flex: 1
    }
});


// 针对HomeItemComponent的样式
export const ItemStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    imageStyle: {
        width: 100,
        height: 100,
    },
    imageHorizontalStyle: {
        height: 300
    },
    imageViewLeftStyle: {
        flex: 1,
        borderBottomWidth: 5,
        borderRightWidth:2.5,
        borderColor:'white'
    },
    imageViewRightStyle: {
        flex: 1,
        borderBottomWidth: 5,
        borderLeftWidth:2.5,
        borderColor:'white'
    },
    rightContainer: {
        flex: 1,// 只有添加这个flex  那么才会有wrap的效果
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10
    },
    textTopStyle: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: '#aaaaaa',
        paddingBottom: 10
    },
    textBottomStyle: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: '#aaaaaa'
    }
});