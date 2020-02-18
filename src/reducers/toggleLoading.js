const toggleLoading = (state = false,action) => {
    if(action.type === 'toggleLoading'){
        return state = action.payload;
    }
    return state;
}

export default toggleLoading;