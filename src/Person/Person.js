import React from 'react';

const Person = (props) =>{
  return(
    <div>
      <h1>Hello, My name is {props.name} and I'm {props.age} years old</h1>
    </div>
  )
}

export default Person;
