import { combineReducers } from 'redux';

const buttonReducer = (currentTotal=0, action) => {
    if (action.type === 'INCREASE') {
        return currentTotal + 1
    } else if (action.type === 'DECREASE') {
        return currentTotal - 1
    }

    return currentTotal
}


// this will become the inital state object
// formed by the default argument values of the reducers!
export default combineReducers(
    {
        counter: buttonReducer
    }
)