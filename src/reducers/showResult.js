const showResult = (state = 0,action) => {
    if(action.type === 'showResult' && state === 0){
        return !state;
    }
    return state;
}

export default showResult;