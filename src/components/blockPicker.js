import React from "react";
import { BlockPicker } from 'react-color';
import {changeColour} from '../actions/changeColour';
import {clickColour} from '../actions/clickedColour';
import {useSelector,useDispatch} from 'react-redux';
import ReactTooltip from 'react-tooltip';
import './styles/picker.css'
export const MyPicker = () => {
    const colour = useSelector(state => state.colour);
    const dispatch = useDispatch();
    const clickedColour = useSelector(state => state.clickedColour);
    const open = ()=> {
        dispatch(clickColour());
    }
    if(clickedColour){
        return(
            <div>
                <div className="circle" onClick={open} style={{backgroundColor: colour}} ></div>
               <BlockPicker className="picker"
                    color={ colour }
                    onChangeComplete={ (color) =>{
                        dispatch(changeColour(color.hex));
                        dispatch(clickColour());
                    }
                }
                />
              </div>
        )
    }else{
        return(
            <div>
                  <div className="circle" onClick={open} style={{
                      backgroundColor: colour,
                      height: "45px", width: "45px",
                      marginLeft: "58px",marginBottom:"5px",
                      border: "3px solid grey", borderRadius:"50%"}}
                        data-for="main"
                        data-tip="Click to change theme color!"
                ></div>
                    
               <ReactTooltip
                id="main" 
                place={"bottom"}
                type={"dark"}
                effect={"float"}
                />
            </div>
        )
    }
    
}
