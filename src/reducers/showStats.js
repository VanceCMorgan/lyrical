const showStats = (state = 0,action) => {
    if(action.type === 'toggleStats' && action.payload == 0){
        return state = action.payload;
    }
    if(action.type === 'toggleStats' && state === 0){
        return !state;
    }
    return state;
}

export default showStats;