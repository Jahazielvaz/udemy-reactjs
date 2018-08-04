import React from 'react';
import '../App.css';

const SampleComponent = (props) => {
  return(
    <div id="sample-comp-container">
      <h1> {props.intro} </h1>
      <h2>{props.myCurrentState}</h2>
      <h3>{props.children}</h3>
      <h4 onClick={props.newPropState}>try it</h4>
      <h2>{props.myContent} my dynamic content here</h2>
      <h3 onClick={props.custom}>For Hidden Custom Message, click here</h3>
    </div>
  )
}

export default SampleComponent;
