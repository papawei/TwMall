'use strict';

import React, {PropTypes} from 'react';
import {
    StyleSheet,
    ListView,
    TextInput,
    RefreshControl,
    ScrollView,
    Text,
    TouchableOpacity,
    InteractionManager,
    Image,
    Dimensions,
    PixelRatio,
    Platform,
    View, StatusBar
} from 'react-native';

import Icon from '../components/font-icon/Icon';


import {FontSizeMap, BaseStyles} from '../public/Common'

const propTypes = {
    // dispatch: PropTypes.func.isRequired
};


class Main extends React.Component {
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        const {dispatch} = this.props;
        InteractionManager.runAfterInteractions(() => {

        });
    }

    componentWillReceiveProps(nextProps) {

    }

    searchHandler() {

    }

    render() {
        return (<View style={[styles.container]}>

            <View style={[BaseStyles.header, BaseStyles.headerBgcRed]}>
                <View style={BaseStyles.headerLeft}></View>
                <View style={[BaseStyles.headerCenter]}><View style={styles.search}><Icon name='search' size={20} color='#ffffff'></Icon><TextInput  placeholder='手机代理富家' underlineColorAndroid='transparent' placeholderTextColor="#ffffff" onFocus={() => this.searchHandler() }
                    style={styles.searchInput}/></View></View>
                <View style={BaseStyles.headerRight}></View>
            </View>
            <ScrollView style={styles.container}>

            </ScrollView>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf :'center',
        height: 30,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        paddingLeft:5,
        paddingRight:5
    },
    searchInput: {
        flex: 1,
        height: 40,
        marginTop: 5
    },
    welcome: {
        fontSize: FontSizeMap.default
    },
    instructions: {
        fontSize: FontSizeMap.large
    }

});


Main.propTypes = propTypes;

export default Main;



// 'use strict';

// import React, {PropTypes} from 'react';
// import {
//     StyleSheet,
//     ListView,
//     TextInput,
//     RefreshControl,
//     ScrollView,
//     Text,
//     TouchableOpacity,
//     InteractionManager,
//     Image,
//     Dimensions,
//     PixelRatio,
//     Platform,
//     View, StatusBar
// } from 'react-native';

// import Icon from '../components/font-icon/Icon';


// import {FontSizeMap, BaseStyles} from '../public/Common'

// const propTypes = {
//     // dispatch: PropTypes.func.isRequired
// };


// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//     };
//     componentDidMount() {
//         const {dispatch} = this.props;
//         InteractionManager.runAfterInteractions(() => {

//         });
//     }

//     componentWillReceiveProps(nextProps) {

//     }

//     searchHandler() {

//     }

//     render() {
//         return (<View style={[styles.container]}>
//             <StatusBar  backgroundColor="transparent" translucent={true} barStyle="light-content" hidden={false} />
//             <View style={[BaseStyles.header, BaseStyles.headerBgcRed]}>
//                 <View style={BaseStyles.headerLeft}></View>

//                 <View style={BaseStyles.headerRight}></View>
//             </View>
//             <ScrollView style={styles.container}>
//                 <View style={{
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}> <View style={[styles.header_search]}>
//                         <TextInput
//                             autoFocus={true}
//                             enablesReturnKeyAutomatically={true}
//                             returnKeyType="search"
//                             style={[styles.header_textInput]}
//                             defaultValue = {''}
//                             placeholder = {'搜索关键词'}
//                             placeholderTextColor = "#999999"
//                             keyboardType='default'
//                             onChangeText={(text) => {
//                                 this.setState({
//                                     keyword: text
//                                 });
//                             } }
//                             onKeyPress={(e) => {
//                                 if (e.nativeEvent.key === 'Enter') {
//                                     this._getSearchList();
//                                 }
//                             } }
//                             />
//                     </View></View>
//             </ScrollView>

//         </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,

//     },

//     header_search: {
//         height: 40,
//         flex: 1,
//         flexDirection: 'row',
//         borderRadius: 36,
//         borderColor: '#434B71',
//         borderWidth: 1,
//         backgroundColor: '#434B71',
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: 'center'
//     },

//     header_textInput: {
//         flex: 1,
//         fontSize: 14,
//         color: '#FFFFFF'
//     },

// });


// Main.propTypes = propTypes;

// export default Main;



