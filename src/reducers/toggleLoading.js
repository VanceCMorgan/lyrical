//Used to toggle the loading state of the react taable component(s)
const toggleLoading = (state = false,action) => {
    if(action.type === 'toggleLoading'){
        return state = action.payload;
    }
    return state;
}

export default toggleLoading;