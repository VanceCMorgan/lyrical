//Toggles the click state in order to display and hide the colour picker
const clickColour = (state = 0,action) => {
    if(action.type === 'click'){
        return !state;
    }
    return state;
}

export default clickColour;