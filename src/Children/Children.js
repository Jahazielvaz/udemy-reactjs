import React from 'react';

const Children = (props) => {
  return(
    <div>
      <h1>Hello I'm {props.name} and I love to {props.children}</h1>
    </div>
  )
}

export default Children;
