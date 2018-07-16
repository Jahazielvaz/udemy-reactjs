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
      {name: 'Pablo', age: 32},
      {name: 'Vincent', age: 'unknown'}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Pietro', age: 34},
        {name: 'Julianne', age: 23},
        {name: 'Franz', age: 2700}
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Cars model="X90" description="Lightning fast!">You should take it for a spin.</Cars>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name="Karla" age="21" />
        <Person name="Jessica" age="26" />
        <Children name="Natasha">Explore the World</Children>
      </div>
    );
  }
}

export default App;
