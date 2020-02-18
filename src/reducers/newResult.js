const newResult = (state = '',action) => {
    if(action.type === 'newResult'){
       return state = action.payload;
    }
    return state;
}

export default newResult;
