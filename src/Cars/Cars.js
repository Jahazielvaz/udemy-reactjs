import React from 'react';

const Cars = (props) => {
  return(
    <div>
      <h1>The {props.model} is {props.description} {props.children}</h1>
    </div>
  )
}

export default Cars;
