import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      message : "Hi there!",
      username : "",
      password : ""
    }
  }

  onLogin(){
    console.log(this.state)
  }

  //Method
  // onChanageInput(event){
  //   this.setState({
  //     username : event.target.value
  //   });
  // }

  //Property method
  // onTypeInput = (event) => {
  //   this.setState({
  //     password : event.target.value
  //   })
  // }

  onHandleInput = (event) => {
    console.log(event.target.value, event.target.name)
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  render(){
    return(
      <div>
        <h1>Login Page</h1>
        <h2>{this.state.message}</h2>
        <h2>{this.state.username}</h2>
        <h2>{this.state.password}</h2>
        <div>
          <input type="text" placeholder="Enter a value" onChange={this.onHandleInput} name="username" />
        </div>
        <div>
          <input type="passord" placeholder="Enter a value" onChange={this.onHandleInput} name="password"/>
        </div>
        <button onClick={() => this.onLogin()}>Login</button>
        <NavLink to="/signup">Click here to go Register Page</NavLink>
      </div>
    )
  }
}

export default LoginPage;