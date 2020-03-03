import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ReactTooltip from 'react-tooltip';
import {showGraph} from '../actions/showGraph';
import './styles/showGraphButton.css';
//Used to toggle the graph display
export const ShowGraphButton = () => {
    const colour = useSelector(state => state.colour);
    const shouldShow = useSelector(state => state.showGraph);
    const dispatch = useDispatch();
    const show = () => {
        dispatch(showGraph());
    }
        return (
            <div className="GraphButton-Cont" >
                { shouldShow === 1 &&
                    <div onClick={show} id="showGraphButton" style={{backgroundColor: colour}}
                    data-for="main"
                    data-tip="Click to view Graphs of this data!"
                    data-iscapture="true"
                    >Hide Graph</div>
                }
                { shouldShow === 0 &&
                    <div onClick={show} id="showGraphButton" style={{backgroundColor: colour}}
                    data-for="main"
                    data-tip="Click to view Graphs of this data!"
                    data-iscapture="true"
                    >Show Graph</div>
                }

                <ReactTooltip
                id="main" 
                place={"top"}
                type={"dark"}
                effect={"float"}
                multiline={true}
                />
            </div>
            );
}


export default ShowGraphButton;