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
import Slide from '../components/react-native-slide';
import {FontSizeMap, ColorMap, BaseStyles} from '../public/Common'

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
                <View style={[BaseStyles.headerCenter]}><View><View style={styles.search}><Icon name='search' size={20} color='#ffffff'></Icon><TextInput   placeholder='手机代理富家' underlineColorAndroid='transparent' placeholderTextColor="#ffffff" onFocus={() => this.searchHandler() }
                    style={styles.searchInput}/></View><View style={styles.underline}></View></View></View>
                <View style={BaseStyles.headerRight}>
                    <View style={styles.headerRight}><Icon name='message' size={20} color='#ffffff'></Icon>
                        <Text style={styles.message}>消息</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.container}>
                <Slide
                    height={380}
                    autoPlay={5000}
                    showPagination={true}
                    paginationStyle={{
                        backgroundColor: ColorMap.black
                    }}
                    paginationWrapStyle={{
                        bottom: 5
                    }}
                    activePaginationStyle={{
                        backgroundColor: ColorMap.white
                    }}>
                    <View><Image style={styles.viewpager} source={require('../public/images/splash/1.png') } /></View>
                    <View><Image style={styles.viewpager} source={require('../public/images/splash/2.png') } /></View>
                    <View><Image style={styles.viewpager} source={require('../public/images/splash/3.png') } /></View>
                </Slide>
            </ScrollView>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        height: 25,
        paddingLeft: 5,
        paddingRight: 5
    },
    searchInput: {
        flex: 1,
        height: 40,
        marginTop: 10,
        fontSize: FontSizeMap.large,
        color: ColorMap.white
    },
    underline: {
        height: 5,
        borderLeftColor: ColorMap.white,
        borderLeftWidth: 1,
        borderRightColor: ColorMap.white,
        borderRightWidth: 1,
        borderBottomColor: ColorMap.white,
        borderBottomWidth: 1,
    },
    headerRight: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        fontSize: FontSizeMap.small,
        color: ColorMap.white
    },
    viewpager: {
        height: 380,
        backgroundColor: ColorMap.black,
        resizeMode: 'cover'
    },

});


Main.propTypes = propTypes;

export default Main;




