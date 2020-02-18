const currentChoice = (state = 0,action) => {
    if(action.type === 'currentChoice'){
        return action.payload;
    }
    return state;
}

export default currentChoice;