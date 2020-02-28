import React,{ Component } from "react";
import Spinner from './Spinner';
import {useSelector,useDispatch} from 'react-redux';
import './styles/LoadComponent.css';

//overrides the default react table loading component
export const MyLoaderComponent = () => {
    const isLoading = useSelector(state => state.isLoading);
    const colour = useSelector(state => state.colour);
    return(
        <div>
        {isLoading == 1 && 
        <div className="myLoader">
           <Spinner colour={colour} /> 
           <h3>Scraping Genius.com</h3>
           <p>This may take a while</p>
        </div>
        }
        </div>
    );
}

export default MyLoaderComponent;