import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';
import Visitor from './Visitor/Visitor';
import Host from './Host/Host';
import Children from './Children/Children';
import Cars from './Cars/Cars';


class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 23},
      {name: 'Paul', age: 13},
      {name: 'Vincent', age: 'unknown'}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 34},
        {name: 'Julianne', age: 23},
        {name: 'Vincent', age: 1000}
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 43000},
        {name: 'Julianne', age: "%"},
        {name: 'Vicious', age: 5009}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        {/* NOTICE: The this inside of the bind refers to the content inside the this which belongs to the method called switchNameHandler */}
        <button onClick={this.switchNameHandler.bind(this, 'Pietro')}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Artamiel')}
          changed={this.nameChangedHandler}/>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}><b>Transcend Beyond!</b></Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />

        <Person
          name="Karla"
          age="21" />

          {/* <Cars model="X90" description="Lightning fast!">You should take it for a spin.</Cars> */}
        {/* <Children name="Natasha">Explore the World</Children> */}
      </div>
    );
  }
}

export default App;
