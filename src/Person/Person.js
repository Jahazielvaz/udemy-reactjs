import React from 'react';

const Person = (props) =>{
  return(
    <div>
      <h1 onClick={props.click}>Hello, My name is {props.name} and I'm {props.age} years old</h1>
      {/* <p onClick={props.click}>{props.children}</p> */}
      <input type='text' onChange={props.changed} />
    </div>
  )
}

export default Person;
