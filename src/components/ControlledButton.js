import React from 'react';
import {connect} from 'react-redux';

import { increaseValue } from '../actions'

class ControlledButton extends React.Component {
    state = {}

    // assign a state value on mount
    componentDidMount() {
        this.setState({ counter: 0})
    }

    // a controlled callback function
    increaseCounter() {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <div>
                {console.log(this.props)}
                <button onClick={() => this.props.increaseValue()}>controlled counter = {this.props.counter}</button>
            </div>
        )
    }
}

// this references the state object initalized by combineReducers and
// passes whatever properties requested from the state store as
// props to be used in the component
const mapStateToProps = (state) => {
    console.log(state)
    
    return( {counter: state.counter} )
}

// any action creators passed as the second argument of connect will
// be connected to the dispatch function
// **NOTE** {increaseValue: increaseValue} is the actual format
// of the object being passed
export default connect(mapStateToProps, {increaseValue} )(ControlledButton)