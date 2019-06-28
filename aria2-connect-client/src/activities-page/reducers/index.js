import * as Actions from '../actions';
console.log(Actions)
const initState = {
    activeCounter: 1
};
export default function activityReducers(state = initState, action) {
    var newState = {...state};
    // new Actions.RefreshAction().apply(newState, action);
    return newState;
}