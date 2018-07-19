import React from 'react';
import './Person.css';

const Person = (props) =>{
  return(
    <div className="Person">
      <h1 onClick={props.click}>Hello, My name is {props.name} and Im {props.age} years old</h1>
      {/* <p onClick={props.click}>{props.children}</p> */}
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  )
}

export default Person;
