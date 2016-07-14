import React, {
    Component,
    PropTypes,
} from 'react';

import {
    NativeModules,
    Platform,
    PixelRatio,
    processColor,
    requireNativeComponent,
    Text,
} from 'react-native';


const DEFAULT_ICON_SIZE = 12;
const DEFAULT_ICON_COLOR = 'black';


export default function createIconSet(glyphMap, fontFamily, fontFile) {
    let fontReference = fontFamily;
    // Android doesn't care about actual fontFamily name, it will only look in fonts folder.
    if (Platform.OS === 'android' && fontFile) {
        fontReference = fontFile.replace(/\.(otf|ttf)$/, '');
    }

    const IconNamePropType = PropTypes.oneOf(Object.keys(glyphMap));

    class Icon extends Component {
        static propTypes = {
            name: IconNamePropType.isRequired,
            size: PropTypes.number,
            color: PropTypes.string,
        };

        static defaultProps = {
            size: DEFAULT_ICON_SIZE,
            allowFontScaling: false,
        };
        render() {
            const { name, size, color, style, ...props } = this.props;

            let glyph = glyphMap[name] || '?';
            if (typeof glyph === 'number') {
                glyph = String.fromCharCode(glyph);
            }

            const styleDefaults = {
                fontSize: size,
                fontWeight: 'normal',
                fontStyle: 'normal',
                color,
            };

            props.style = [styleDefaults, style];

            styleDefaults.fontFamily = fontReference;

            return (<Text {...props}>{glyph}{this.props.children}</Text>);
        }
    }

    return Icon;
}
