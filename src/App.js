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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Pietro', age: 34},
        {name: 'Julianne', age: 23},
        {name: 'Vicious', age: 2700}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler}><b>So you're wondering how I've gotten to this age. Vampires are a lowly form of demon. I'm way above that!</b></Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}  />

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
