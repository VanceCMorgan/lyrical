const newWord = (state = '',action) => {
    if(action.type === 'newWord'){
       return state = action.payload;
    }
    return state;
}

export default newWord;
