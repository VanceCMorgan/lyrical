import React,{ Component } from "react";
import './styles/ResultsDisplay.css';
import {showStats} from '../actions/showStats';
import {newLyrics} from '../actions/newlyrics';
import {useSelector,useDispatch} from 'react-redux';
import {currentChoice} from '../actions/currentChoice';
import {newError} from '../actions/newError';
import {toggleLoading} from '../actions/toggleLoading';
import {newDictionary} from '../actions/newDictionary'
import ReactTable from "react-table-v6";
import axios from 'axios';
import "react-table-v6/react-table.css";
import myLoaderComponent from './myLoadingComponent';

export const ResultsDisplay = () => {
    const colour = useSelector(state => state.colour);
    const showResult = useSelector(state=> state.showResult);
    const Results = useSelector(state=> state.result);
    const showStatsFromStore = useSelector(state => state.showStats);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();
    var wordDict={};
    function stripHtml(html)
    {
      html = html.replace(/<br>/g," ");
      var tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }

    
function getWordCounts(inputString){
    if(inputString != ""){
        var words = inputString.split(' ');
        words.forEach(function(w) {
            if (!wordDict[w]) {
                wordDict[w] = 0;
            }
            wordDict[w] += 1;
        });
        if(showStats==1){
            dispatch(newDictionary(wordDict));
        }
        return wordDict;
    }
    
}

    const view = async (url,title,artist) => {
        dispatch(toggleLoading(true));
        var response;
        try{
             response = await axios({
                method: "Get",
                url: "/scraper?url="+url,
                baseURL: "http://localhost:9000"
             });
             if(response == "ERROR"){
                 console.log("gotERror");
                 dispatch(toggleLoading(false));
                 dispatch(newError("Failed to load the web scraping tool please try again!"));
             }
             if(response.data == "ERROR"){
                dispatch(toggleLoading(false));
                dispatch(showStats(0));
                dispatch(newError("Failed to load the web scraping tool please try again!"));
             }
            
            dispatch(toggleLoading(false));
            dispatch(newLyrics(response.data));
            dispatch(newDictionary(getWordCounts(stripHtml(response.data))));
            dispatch(showStats());
            dispatch(currentChoice({"artist": artist, "title": title}));
        }catch(error){
            dispatch(toggleLoading(false));
            dispatch(newError("Failed to load the web scraping tool please try again!"));
            console.log(error);
        }
    }

    
    if(showResult){
        const columns = [
            {
                Header: "Title",
                accessor: "Title"
            },{
                Header: "Artist",
                accessor: "Artist"
            },{
                Header: "Action",
                accessor: "Action"
            }
        ]
        var data  = [];
        Results.forEach(result => {
            var resObj = {
                "Title": result.result.title,
                "Artist": result.result.primary_artist.name,
                "Action": <div onClick={() =>{
                    view(result.result.url,result.result.title,result.result.primary_artist.name);
                }} target="_blank">Open</div>
            }
            data.push(resObj);
        });
            return (
                <div>
                    {(showStatsFromStore == 0 || isLoading ==1) && 
                    <div className="ResultsDisplay-Cont" style={{color: "Gray",border: "3px solid " + colour}}>
                    <ReactTable id="resultTable"
                    columns = {columns}
                    data = {data}
                    pageSize={10}
                    loading={isLoading}
                    loadingText={"Fetching... This may take a few moments!"}
                    LoadingComponent={myLoaderComponent}>
                    </ReactTable>
                    </div>
              }
                </div>
                );
    }else{
        return ('');
    }
         
    }
export default ResultsDisplay;