import React from 'react';
import '../App.css';

const SampleComponent = (props) => {
  return(
    <div id="sample-comp-container">
      <h1> {props.intro} </h1>
      <h2>{props.myCurrentState}</h2>
      <h3>{props.myNewState}</h3>
    </div>
  )
}

export default SampleComponent;
