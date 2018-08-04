import React from 'react';

const UserOutput = (props) => {
  return(
    <div>
      <h1>Welcome User! Please state your name.</h1>
      <h2>Hello, my username is {props.userName}</h2>
    </div>
  )
}

export default UserOutput;
