'use strict';

import {
    StyleSheet,
    PixelRatio,
    Platform
} from 'react-native';


let statusBar;
if (Platform.OS === 'ios') {
    statusBar = 20;
} else {
    statusBar = 25;
}

export const StatusBarHeight = statusBar;
export const NavigatorBarHeight = 44;

export const ColorMap = {
    white: '#ffffff',
    black: '#000000',
    red: '#FF0000',
    red44: 'ff4400',
    clear: 'transparent',
};
export const FontSizeMap = {
    xxsmall: 14 / 1.2 / 1.2 / 1.2,
    xsmall: 14 / 1.2 / 1.2,
    small: 14 / 1.2,
    default: 14,
    large: 14 * 1.2,
    xlarge: 14 * 1.2 * 1.2,
    xxlarge: 14 * 1.2 * 1.2 * 1.2
};

export const BaseStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: NavigatorBarHeight + StatusBarHeight,
        alignItems: 'center',
        paddingTop: StatusBarHeight,
        backgroundColor: 'transparent'
    },
    headerBgcRed: {
        backgroundColor: 'red',
    },
    headerLeft: {
        width: 80
    },
    headerCenter: {
        flex: 1,
        alignItems: 'center',
    },
    headerRight:{
         width: 80
    }
});

