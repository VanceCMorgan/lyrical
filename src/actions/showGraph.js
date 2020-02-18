export const showGraph = (negate) => {
    if(negate ==0){
        return{
            type: 'toggleGraph',
            payload: negate
        }
    }else{
        return{
            type: 'toggleGraph'
        }
    }
}
