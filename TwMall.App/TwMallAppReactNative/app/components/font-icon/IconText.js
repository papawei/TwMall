'use strict';

import React, {PropTypes} from 'react';
import {
    Text,
    View
} from 'react-native';


import Icon from './Icon';

export default class IconText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {
            iconName, iconStyle, title, style, iconWrapperStyle, titleWrapperStyle, titleStyle
        } = this.props;
        return (
            <View style={style}>
                <View style={iconWrapperStyle}>
                    <Icon name={iconName} style={iconStyle} />
                </View>
                <View style={titleWrapperStyle}>
                    <Text style={titleStyle}>{title}</Text>
                </View>
            </View>
        );
    }
}
