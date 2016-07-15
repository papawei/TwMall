'use strict';


import React, {PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Alert
} from 'react-native';

import {Toast} from '../public/Common'

import CategoryData from './CategoryData'
import IconText from './IconText'

let _classify;
export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
        _classify = this;
    }
    componentWillMount() {
        // App.getClassifies().then((data) => {
        //     let dataSource = lodash.chain(data).filter((clazz) => {
        //         return !clazz.pcno;
        //     }).chunk(5).value();

        //     this.setState({
        //         categories: dataSource
        //     });
        // }, (message) => {
        //     Toast.show(message);
        // });
        
    }
    _onPressClassItem(obj) {
        this.props.toRoute ? this.props.toRoute({
            component: GoodsList,
            name: '连接到列表',
            passProps: {
                clazz: obj
            }
        }) : Alert.alert(obj.cname);
    }


    _renderClassify(data, pageID) {
        let _rowsCount = data.length,
            rowData = data,
            cols = [];
        for (let j in rowData) {
            let
                clazz = rowData[j],
                appicon = clazz.appicon ? clazz.appicon.split(';') : ['list', '#fa5b60'];
            cols.push(<TouchableOpacity  key={'classify_row_item' + pageID + j}  activeOpacity ={1} style={styles.classify_item_wrapper} onPress={() => _classify._onPressClassItem(clazz) }>
                <View>
                    <IconText
                        title={clazz.cname}
                        iconName={appicon[0]}
                        style={styles.classify_item}
                        titleStyle={[styles.classify_item_title, BaseStyle.font_size_lg]}
                        iconWrapperStyle={[styles.classify_item_icon_wrapper]}
                        iconStyle={[styles.classify_item_icon, { color: appicon[1] }]} />
                </View>
            </TouchableOpacity>);
        }
        {
            //一行不足4个的，补足4个占位
        }
        if (rowData.length < 5) {
            for (var n = 0; n < 5 - rowData.length; n++) {
                cols.push(<View key={'classify_row_itemno' + pageID + n} style={styles.classify_item_wrapper}><Text></Text></View>);
            }
        }
        return <View key={'classify_row' + pageID} style={styles.classify_page_row}>{cols}</View>;
    }
    render() {
        let items;
        if (this.state.categories.length > 0 && !this.tabs) {
            items = this.state.categories.map((x, i) => {
                return this._renderClassify(x, i + 1);
            });
        }
        return (
            <View style={[styles.classify_wrapper]}>
                <View style={[styles.classify_page]}>
                    {
                        this.state.categories.length > 0 ? items : null
                    }
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    classify_wrapper: {
    },
    classify_page: {
        width: Util.window.width,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    classify_page_row: {
        flexDirection: 'row',
    },
    classify_item_wrapper: {
        flex: 1,
        height: 130 * .6, //130px
        justifyContent: 'center',
        borderRightWidth: BaseStyle('size_pxwidth').width,
        borderBottomWidth: BaseStyle('size_pxwidth').width,
        borderColor: '#ededed',
        borderStyle: 'solid'
    },
    classify_item: {
    },
    classify_item_icon: {
        fontSize: 60 * .6,
        color: '#ffffff'
    },
    classify_item_title: {
        color: '#454545',
    },
    classify_item_icon_wrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
