import React,{ Component } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {Bar, Line, Pie} from 'react-chartjs-2';
import pSBC from 'shade-blend-color';
export const Chart = () => {
    var colour = useSelector(state => state.colour);
    const choice = useSelector(state => state.choice);
    const dictionary = useSelector(state => state.dictionary);
    const chartType = useSelector(state => state.chartType);
    var myLabels = [];
    var myData = [];
    var myColours = [];
    for (var row in dictionary){
        if(dictionary[row] > 1){
            myColours.push('#'+(Math.random()*0xFFFFFF<<0).toString(16));
            myLabels.push(row);
            myData.push(dictionary[row]);
        }
    }    
 
    const chartData = {
        labels: myLabels,
        datasets:[{
            label: 'lyricData',
            data: myData,
            backgroundColor: myColours
        }]
    }
    if(chartType == 'Pie'){
        return (
            <div id="chart" className="Chart">
            <Pie 
                data={chartData}
                options ={{
                    title:{
                        display: true,
                        text: choice.title + " by: " + choice.artist,
                        fontSize: 25
                    },
                    legend:{
                        display:false,
                        position: 'bottom',
                        labels:{
                            fontColor: 'darkGrey'
                        }
                    },
                    tooltips:{
                        enabled:true
                    }
                }}
            />
            </div>
            );
    }else if(chartType == 'Bar'){
        return (
            <div id="chart" className="Chart">
            <Bar 
                data={chartData}
                options ={{
                    title:{
                        display: true,
                        text: choice.title + " by: " + choice.artist,
                        fontSize: 25
                    },
                    legend:{
                        display:false,
                        position: 'bottom',
                        labels:{
                            fontColor: 'darkGrey'
                        }
                    },
                    tooltips:{
                        enabled:true
                    }
                }}
            />
            </div>
            );
    }else{
        return (
            <div id="chart" className="Chart">
            <Line 
                data={chartData}
                options ={{
                    title:{
                        display: true,
                        text: choice.title + " by: " + choice.artist,
                        fontSize: 25
                    },
                    legend:{
                        display:false,
                        position: 'bottom',
                        labels:{
                            fontColor: 'darkGrey'
                        }
                    },
                    tooltips:{
                        enabled:true
                    }
                }}
            />
            </div>
            );
    }
        

}


export default Chart;