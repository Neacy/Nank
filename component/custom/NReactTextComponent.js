/**
 * Created by jayu on 2017/8/24.
 */
import {PropTypes} from 'react';
import {
    View,
    requireNativeComponent
} from 'react-native';

let iface = {
    name: 'NText',// 重新定义了这个自定义View的名字
    propTypes: {
        radius: PropTypes.string,
        color: PropTypes.string,
        ...View.propTypes // 包含默认的View的属性，如果没有这句会报‘has no propType for native prop’错误
    }
};

module.exports = requireNativeComponent('NCustomReactView', iface);