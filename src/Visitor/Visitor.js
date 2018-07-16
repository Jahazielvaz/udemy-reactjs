import React from 'react';

const Visitor = (props) => {
  return(
    <h1>{props.name}{props.response}{props.country}{props.question}</h1>
  )
}


export default Visitor;
