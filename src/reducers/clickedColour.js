const clickColour = (state = 0,action) => {
    if(action.type === 'click'){
        return !state;
    }
    return state;
}

export default clickColour;