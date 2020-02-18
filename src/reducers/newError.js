const newError = (state = '',action) => {
    if(action.type === 'newError'){
       return state = action.payload;
    }
    return state;
}

export default newError;
