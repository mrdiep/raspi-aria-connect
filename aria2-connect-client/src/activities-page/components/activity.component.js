import {connect} from 'react-redux';
import React, { Component } from 'react'
import mapDispatchToProps from '../actions/mapDispatchToProps';

class Activity extends Component {
    render() {
      return (

        <div>
             <h1>Counter = {this.props.counter}</h1>
             <button onClick={() => this.props.RefreshAction('payload')}>click to increase</button>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        counter: state.activityState.activeCounter
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);