import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Custom Components
import UserInput from './userInput/UserInput';
import UserOutput from './userOutput/UserOutput';

//Sample Component Section
import SampleComponent from './sample-component/SampleComponent';

//Sample Stateful Component
import SampleStatefulComponent from './sample-stateful-component/SampleStatefulComponent';

class App extends Component {
  state = {
    message: "Hello I'm State"
  }

  messageChangeHandler = () => {
    this.setState({
      message: "Hello I'm State Change"
    })
  }



  render() {
    return (
      <div className="App">
        <SampleComponent intro={"I'm a prop"} />
        <SampleStatefulComponent />
        <SampleComponent myCurrentState={this.state.message} />
        <SampleComponent myNewState={this.messageChangeHandler} />
      </div>
    );
  }
}

export default App;
