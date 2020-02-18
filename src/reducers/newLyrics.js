const newLyrics = (state = '',action) => {
    if(action.type === 'newLyrics'){
       return state = action.payload;
    }
    return state;
}

export default newLyrics;
