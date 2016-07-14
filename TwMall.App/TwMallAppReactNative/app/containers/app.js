'use strict';
import React from 'react';
import ReactNative from 'react-native';

const {
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View,
    Dimensions,
    InteractionManager,
    AppState,
    Platform,
} = ReactNative;

import {connect} from 'react-redux';
import Splash from '../pages/Splash';
import {NaviGoBack} from '../public/utils/CommonUtils';


var _navigator, _route;
class App extends React.Component {
    constructor(props) {
        super(props);
        BackAndroid.addEventListener('hardwareBackPress', () => this.goBack());
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    goBack() {
        return NaviGoBack(_navigator);
    }
    renderScene(route, navigator) {
        let Component = route.component;
        _navigator = navigator;
        _route = route;
        return (
            <Component navigator={navigator} route={route} />
        );
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.FadeAndroid;
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    translucent={true}
                    />
                <Navigator
                    ref='navigator'
                    style={{ flex: 1 }}
                    configureScene={(route, routeStack) => this.configureScene(route, routeStack) }
                    renderScene={(route, navigator) => this.renderScene(route, navigator) }
                    initialRoute={{
                        component: Splash,
                        name: 'Splash'
                    }}/>
            </View>
        );
    }
}

// function mapStateToProps(state) {
//     const {} = state;
//     return {
//     }
// }

// export default connect(mapStateToProps)(App);

export default App;