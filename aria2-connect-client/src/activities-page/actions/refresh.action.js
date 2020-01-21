export default class RefreshAction {
    payload
    constructor(payload) {
        this.payload = payload;
    }
    
    middleware = () => async (dispatch, getState) => {
        console.log('payload', this.payload);
        dispatch({
            type: 'RefreshAction',
        })
    }
    
    apply = (state, action) => {
        state.activeCounter = state.activeCounter + 1;
    }
}
