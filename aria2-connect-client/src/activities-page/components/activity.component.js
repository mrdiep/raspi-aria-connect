import {connect} from 'react-redux';
import React, { Component } from 'react'

class Activity extends Component {
    render() {
      return <h1>Counter = {this.props.counter}</h1>;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        counter: state.activityState.activeCounter
    };
}

export default connect(mapStateToProps)(Activity);