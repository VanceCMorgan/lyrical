import colourPick from './colourPick';
import clickColour from './clickedColour';
import showGraph from './showGraph';
import showResult from './showResult';
import showStats from './showStats';
import songList from './songList';
import searchSubmit from './searchSubmit';
import searchKeyUp from './searchKeyUp';
import newResult from './newResult';
import newDictionary from './newDictionary';
import newLyrics from './newLyrics';
import newError from './newError';
import newWord from './newWord';
import newChartType from './newChartType';
import currentChoice from './currentChoice';
import toggleLoading from './toggleLoading';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    colour: colourPick,
    songs:songList,
    clickedColour: clickColour,
    showGraph: showGraph,
    searchSubmit: searchSubmit,
    queryString: searchKeyUp,
    showResult: showResult,
    showStats: showStats,
    result: newResult,
    lyrics: newLyrics,
    choice: currentChoice,
    isLoading: toggleLoading,
    dictionary: newDictionary,
    chartType: newChartType,
    error: newError,
    word: newWord
});

export default allReducers;
