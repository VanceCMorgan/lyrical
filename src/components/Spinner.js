import React from 'react';
//loading state spinner
const Spinner = () => {
    return(
<svg xmlns="http://www.w3.org/2000/svg" style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto"}} width="217px" height="217px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<rect x="21" y="30" width="8" height="40" fill="#182731">
  <animate attributeName="y" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.5;1" values="24;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.29411764705882354s"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.5;1" values="52;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.29411764705882354s"></animate>
</rect>
<rect x="46" y="30" width="8" height="40" fill="darkGrey">
  <animate attributeName="y" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.5;1" values="25.5;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.14705882352941177s"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.5;1" values="49;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.14705882352941177s"></animate>
</rect>
<rect x="71" y="30" width="8" height="40" fill="#182731">
  <animate attributeName="y" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.5;1" values="25.5;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.5;1" values="49;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
</rect></svg>
    );
}

export default Spinner;