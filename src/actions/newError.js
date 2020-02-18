export const newError = (errMsg) => {
    return{
        type: 'newError',
        payload: errMsg
    }
} 

