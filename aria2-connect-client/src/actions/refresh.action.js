const refreshAction = {
    type: 'INCREMENT',
    data: 1,
    middleware: async () => {

    },
    apply: (state) => {
        state.value = state.value + 1;
        return state;
    }
}

export { refreshAction }; 