const newDictionary = (state = '',action) => {
    if(action.type === 'newDictionary'){
       return state = action.payload;
    }
    return state;
}

export default newDictionary;
