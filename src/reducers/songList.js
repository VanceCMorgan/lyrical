const songList = (state = 'a song',action) => {
    switch(action.type){
        case 'GET':
            return state;
        default:
            return '';
    }
}

export default songList;