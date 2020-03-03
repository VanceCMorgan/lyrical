const showGraph = (state = 0,action) => {
    if(action.type === 'toggleGraph'){
       if(action.payload === 0){
        return state = action.payload;
       }else{
        return !state;
       }
    }
    
    return state;
}

export default showGraph;