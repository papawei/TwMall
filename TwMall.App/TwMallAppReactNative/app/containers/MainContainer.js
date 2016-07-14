'use strict';

import React, { Component, } from 'react';
import {connect} from 'react-redux';
import Main from '../pages/Main';

class MainContainer extends Component {
    render() {
        return (
            <Main {...this.props} />
        );
    }
}

// function mapStateToProps(state) {
//     const {} = state;
//     return {
//     }
// }

// export default connect(mapStateToProps)(MainContainer);
export default MainContainer;
