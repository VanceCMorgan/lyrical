import React from "react";
import {useSelector} from 'react-redux';
import Highlight from 'react-highlight';
import './styles/LyricDisplay.css';
import './styles/sunburst.css';

//This component displays the lyrics for the currently selected song
export const LyricDisplay = () => {
    const colour = useSelector(state => state.colour);
    const showStats = useSelector(state => state.showStats);
    var strippedLyrics = useSelector(state => state.lyrics);
    var highlighter = useSelector(state => state.word);
    var words = strippedLyrics.split("<");
    strippedLyrics = "";
    words.forEach(word => {
      if(word.startsWith('a href')){
        word = word.slice(0, 8) + "https://www.Genius.com" + word.slice(8);
        word = word.slice(0, 2) + "target='_blank' " + word.slice(2);
      }  
      if(strippedLyrics===""){
        strippedLyrics = strippedLyrics.concat(word + " ");
      }else{
        strippedLyrics = strippedLyrics.concat("<"+ word + " ");
      }
    });
      return (
        <div>
          {showStats === 1 && 
          <div id="LyricDisplay-Cont" style={{color: "Gray",border: "3px solid " + colour}}>
            <h3>Lyrics</h3>
            <div id="lyricsDisplay">
              <Highlight id="lyrics"
              search={highlighter}
              innerHTML={true}
              >{strippedLyrics}
              </Highlight>
              </div>
          </div>
          }
        </div>
         
         );
    }
    
export default LyricDisplay;