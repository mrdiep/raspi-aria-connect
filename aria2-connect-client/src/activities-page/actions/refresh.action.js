class refreshAction {
    data = 1
    middleware = async (dispatch, getState) => {
        console.log('aaaa');
    }
    
    apply = (state) => {
        state.activeCounter = state.activeCounter + 1;
    }
}

export { refreshAction }; 