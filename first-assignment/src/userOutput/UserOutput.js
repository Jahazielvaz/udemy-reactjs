import React from 'react';
import '../App.css'

const UserOutput = (props) => {
  return(
    <div id="output-container">
      <h2>Hello World {props.user}</h2>

      <h3>Goodbye World {props.name}</h3>
    </div>
  )
}

export default UserOutput;
