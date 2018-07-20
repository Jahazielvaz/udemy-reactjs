import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Custom Components
import UserInput from './userInput/UserInput';
import UserOutput from './userOutput/UserOutput';

class App extends Component {
  state = {
    username : 'Paul'
  }

  nameChangeHandler = () => {
    setState({
      username: 'Just Kidding, Im Vincent!'
    })
  }

  render() {
    return (
      <div className="App">
        <br />
        <UserInput />
        <br /><hr />
        <UserOutput user={"This is Mike"} />
        <UserOutput onClick({this.nameChangeHandler}) user={this.state.username} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
