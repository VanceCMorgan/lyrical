import React,{ Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {searchSubmit} from '../actions/searchSubmit';
import {searchKeyUp} from '../actions/searchKeyUp';
import {showResult} from '../actions/showResult';
import {showStats} from '../actions/showStats';
import {showGraph} from '../actions/showGraph';
import {newError} from '../actions/newError';
import {newResult} from '../actions/newResult';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import './styles/SearchBar.css';

export const SearchBar = () => {
    const colour = useSelector(state => state.colour);
    const queryString = useSelector(state => state.queryString);
    const dispatch = useDispatch();
    // will request an external api for us...
    //http://openlibrary.org/search.json?q=the+lord+of+the+rings
    const search =async () => {
	const response = await axios({
        method: "Get",
        url: "/search?access_token=XYurJbndpFN6VnYbMRnYKm27e4GGYVwwFz8wS4rzEWw6YL3RwZnN8VEUlDR78q8l&per_page=40&page=1&q=" + queryString,
        baseURL: "https://api.genius.com"
     });
                dispatch((searchSubmit(queryString)));
                dispatch((newError("")));
                dispatch(newResult(response.data.response.hits));
                dispatch(showResult());
                dispatch(showStats(0));
                dispatch(showGraph(0));
    }
    const keyUp = (e) => {
            dispatch(searchKeyUp(document.getElementById('searchInput').value));
    }
        return (
            <div className="SearchBar-Cont" >
                <input autoFocus autoComplete="off"  maxLength="35" value={queryString} onChange={keyUp} id="searchInput" placeholder="Title or Artist" style={{color: colour, border: "3px solid " + colour}} className="SearchBar" onKeyPress={event => {
                    if (event.key == 'Enter'){
                        search();
                    }
                }}/>
                <span onClick={search} style={{color: colour}}  className="btn">
                    <FontAwesomeIcon icon={faSearch} size={"2x"} />
                </span>
            </div>
            );
}


export default SearchBar;