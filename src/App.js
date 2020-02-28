import React from 'react';
import SearchBar from './components/SearchBar'
import ResultsDisplay from './components/ResultsDisplay'
import LyricDisplay from './components/LyricDisplay'
import StatDisplay from './components/StatDisplay'
import GraphDisplay from './components/GraphDisplay'
import {NavMenu} from './components/NavMenu';
import {InfoBar} from './components/InfoBar';
import './components/styles/App.css';
import {ShowGraphButton} from './components/showGraphButton';
import {useSelector} from 'react-redux';

function App() {
  const anyError = useSelector(state=>state.error);
  const shouldShow = useSelector(state=>state.showStats);
    return (
      <div className="App" style={{backgroundColor: 'darkGrey',height: "400px"}}>
        <NavMenu />
        {anyError != "" &&<p className="error">{anyError}</p>}
        <SearchBar/>
        <InfoBar/>
        <ResultsDisplay />
        <StatDisplay />
        <LyricDisplay />
        {shouldShow == 1 && <ShowGraphButton />}
        <GraphDisplay />
      </div>
    );
}


export default (App)
