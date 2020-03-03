export const showStats = (negate) => {
    if(negate === 0){
        return{
            type: 'toggleStats',
            payload: negate
        }
    }else{
        return{
            type: 'toggleStats',
        }
    }
}
