const newChartType = (state = 'Line',action) => {
    if(action.type === 'newChartType'){
       return state = action.payload;
    }
    return state;
}

export default newChartType;
