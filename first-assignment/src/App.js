import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Custom Components
import UserInput from './userInput/UserInput';
import UserOutput from './userOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <UserInput />
        <br /><hr />
        <UserOutput />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
