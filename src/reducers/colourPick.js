const colourPick = (state = '#abcdef',action) => {
    if(action.type === 'colour'){
        if(action.payload){
            return state = action.payload;
        }else{
            return state = '#abcdef';
        }
    }else{
        return state;
    }
}

export default colourPick;