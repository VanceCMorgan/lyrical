import React from "react";
import Chart from './Chart';
import './styles/GraphDisplay.css'
import {newChartType} from '../actions/newChartType'
import pSBC from 'shade-blend-color';
import {useSelector,useDispatch} from 'react-redux';

//This component displays the graphs of lyric counts and options to change the graph type
export const GraphDisplay = () => {
    const dispatch = useDispatch();
    const colour = useSelector(state => state.colour);
    const showGraph = useSelector(state=> state.showGraph);
    const active = pSBC ( -0.3, colour );
    //these methods are used to handle the active state of the buttons
    const leftButtonPress = () =>{
        document.getElementById("left-btn").style.backgroundColor = active;
        document.getElementById("center-btn").style.backgroundColor = colour;
        document.getElementById("right-btn").style.backgroundColor = colour;
        dispatch(newChartType("Pie"));
    }
    const rightButtonPress = () =>{
        document.getElementById("right-btn").style.backgroundColor = active;
        document.getElementById("center-btn").style.backgroundColor = colour;
        document.getElementById("left-btn").style.backgroundColor = colour;
        dispatch(newChartType("Bar"));
    }
    const centerButtonPress = () =>{
        document.getElementById("center-btn").style.backgroundColor = active;
        document.getElementById("left-btn").style.backgroundColor = colour;
        document.getElementById("right-btn").style.backgroundColor = colour;
        dispatch(newChartType("Line"));
    }
        return (
            <div>
                { showGraph === 1 && 
                <div id="GraphDisplay-Cont" style={{color: "Gray",border: "3px solid " + colour}}>
                    <Chart />
                    <div id="left-btn" onClick={leftButtonPress}  style={{backgroundColor: colour}}>
                    <p>Pie</p>
                    </div><div id="center-btn" onClick={centerButtonPress} style={{backgroundColor: active}}>
                        <p>Line</p>
                    </div>
                    <div id="right-btn" onClick={rightButtonPress} style={{backgroundColor: colour}}>
                        <p>Bar</p>
                    </div>
                </div>
                }
            </div>
            );
    }


export default GraphDisplay;