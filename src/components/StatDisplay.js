import React,{ Component } from "react";
import ReactTable from "react-table-v6";
import {newWord} from '../actions/newWord'
import {useSelector,useDispatch} from 'react-redux';
import './styles/StatDisplay.css';

//this component displays the word counts for the currently selected songs lyrics
export const StatDisplay = () => {
    const colour = useSelector(state => state.colour);
    const showStats = useSelector(state => state.showStats);
    const isLoading = useSelector(state => state.loading);
    const wordDictionary = useSelector(state => state.dictionary);
    var listItems = [];
    const columns = [
        {
            Header: "Word",
            accessor: "Word"
        },{
            Header: "Count",
            accessor: "Count"
        }]

    //strip any html tags left and add to the items list (data for table)
    for (var key in wordDictionary) {
        var value = wordDictionary[key];
        if(key!= "" && !key.includes("=") && !key.includes("--") && !key.includes("_id")){
            listItems.push({
                "Word": key.replace(/\[|\]|\?|\}|\,|\"|\.|\:|\(|\)/g," "),
                 "Count": value 
            });
        }
    }
    
        return (
            <div>
                <p className="rt-td"></p>
                {showStats ==1 && 
                <div id="StatDisplay-Cont" style={{color: "Gray",border: "3px solid " + colour}}>
                 <h3>Lyric Counts</h3>
                 <ReactTable className="myStatTable" id="statTable"
                 columns = {columns}
                 data = {listItems}
                 pageSize={20}
                 loading={isLoading}
                 getTrGroupProps={(state, rowInfo, column, instance) => { return { onMouseEnter: (e, entered) =>{
                     //dispatch(newWord(e.target.textContent));
                 }}}}
                 >
                 </ReactTable>
                 </div>
                }
            </div>
            
            );
         
    }

export default StatDisplay;