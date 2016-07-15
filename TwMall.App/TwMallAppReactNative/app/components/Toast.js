/** Created by Starocean */
import React, {PropTypes} from 'react';
import
{View,
	Text,
	Component,
	StyleSheet,
	Dimensions}
from 'react-native';

import RootSiblings from 'react-native-root-siblings';
import RootToast from 'react-native-root-toast';

class Toast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}
	_toast = null;
	static show(message, options = {
								duration: 2000,
								position: -50,
								shadow: true,
								animation: true,
								hideOnPress: true,
								delay: 0,
								onShow: () => {
			// calls on toast\`s appear animation start
								},
								onShown: () => {
			// calls on toast\`s appear animation end.
								},
								onHide: () => {
			// calls on toast\`s hide animation start.
								},
								onHidden: () => {
			// calls on toast\`s hide animation end.
								},

								showWrapper: false,//是否显示遮罩
								wrapperPointerEvents: "auto", //pointerEvents enum('box-none', 'none', 'box-only', 'auto')
								wrapperStyle: null //遮罩的样式
	}) {
		let toast = {};
		//不允许自动关闭
		if (options.showWrapper) {
			options.duration = 0;
			options.position = 0;//中间
			options.hideOnPress = false;
		}
		toast.wrapper = options.showWrapper && new RootSiblings(<View style={[styles.contianer, options.wrapperStyle]}></View>);
		toast.toast = RootToast.show(message, options);
		return toast;
	}

	static hide(toast) {
		if (toast && toast.wrapper && toast.wrapper instanceof RootSiblings) {
			toast.wrapper.destroy();
			RootToast.hide(toast.toast);
		} else if (toast && toast.toast && toast.toast instanceof RootSiblings) {
			RootToast.hide(toast.toast);
		} else {
			console.warn(`Toast.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof toast}\` instead.`);
		}
	};

	// componentWillMount(){
	//         this._toast = new RootSiblings(<ToastContainer
	//            {...this.props}
	//            duration={0}
	//        />);
	//    };

	//    componentWillReceiveProps(){
	//         this._toast.update(<ToastContainer
	//            {...nextProps}
	//            duration={0}
	//        />);
	//    };

	//    componentWillUnmount(){
	// 	this._toast.destroy();
	//    };
	render() {
		return null;
	}
}

var styles = StyleSheet.create({
	contianer: {
		position: 'absolute',
		width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
		top: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,0.4)'
	}
});

export {RootToast};
export default Toast;