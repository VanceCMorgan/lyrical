const searchKeyUp = (state = '',action) => {
    if(action.type === 'keyUp'){
       return state = action.payload;
    }
    return state;
}

export default searchKeyUp;
