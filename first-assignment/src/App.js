import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Sample Component Section
import SampleComponent from './sample-component/SampleComponent';

//Sample Stateful Component
import SampleStatefulComponent from './sample-stateful-component/SampleStatefulComponent';

//ACTUAL TEST
import UserInput from './userInput/UserInput';
import UserOutput from './userOutput/UserOutput';

class App extends Component {
  state = {
    userName : "Vincent"
  }


userNameChangeHandler = () => {
  this.setState({
    userName: "Victus!"
  })
}














  // state = {
  //   message: "Hello I'm State"
  // }

  // messageChangeHandler = () => {
  //   this.setState({
  //     message: "Hello I'm State Change"
  //   })
  // }
  //
  // newPropHandler = () => {
  //   this.setState({
  //     message: "Hello I'm a State Change Prop"
  //   })
  // }
  //
  // dynamicContentHandler = (newMessage) => {
  //   this.setState({
  //     message: newMessage
  //   })
  // }



  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput userName={'mike'} />
        <UserOutput userName={'Paul'} />
        <UserOutput userName={'John'} />
        <UserOutput userName={this.state.userName} />
        <button onClick={this.userNameChangeHandler}>Click Here To Change Username</button>











        {/* <SampleComponent intro={"I'm a prop"} />
        <SampleStatefulComponent />
        <SampleComponent newPropState={this.newPropHandler} />
        <SampleComponent custom={this.dynamicContentHandler.bind(this, "This is a bound message")} />

        <SampleComponent myCurrentState={this.state.message} />

        <button onClick={this.messageChangeHandler}>click here</button> */}


      </div>
    );
  }
}

export default App;
