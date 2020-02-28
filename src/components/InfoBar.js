import React,{Component} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import './styles/InfoBar.css';

//Displays the name and artist of the currently selected song
export const InfoBar = () => {
    const colour = useSelector(state => state.colour);
    const showStats = useSelector(state => state.showStats);
    const choice = useSelector(state => state.choice);

    if(showStats){
        return (
            <div className="InfoBar-Cont" style={{color: "Gray",border: "3px solid " + colour}}>
               <h3>{choice.title}</h3>
               <p>{choice.artist}</p>
            </div>
        );
    }else{
        return('');
    }
    }


export default InfoBar;