import React from 'react';

const Person = (props) =>{
  return(
    <div>
      <h1>Hello, My name is {props.name} and I'm {props.age} years old</h1>
      <p>{props.children}</p>
      <input type='text' />
    </div>
  )
}

export default Person;
