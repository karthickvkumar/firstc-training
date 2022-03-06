import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
  const [message, setMessage] = useState("welcome to Fun comp");
  const [registerForm, setRegisterForm] = useState({
    username : '', passowrd : ''
  });
  const navigate = useNavigate();

  const print = () => {
    setMessage("Hey its updated!!")
  }

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.name)
    setRegisterForm({...registerForm, [event.target.name] : event.target.value})
  }

  const onRegister = () => {
    console.log(registerForm);
    navigate("/home", {state : registerForm });

  }

  return(
    <div>
      <h1>This is a Register Page</h1>
      <h1>{message}</h1>
      <button onClick={() => print()}>Click here</button>
      <div>
        <h2>Register Form</h2>
        <div>
          <label>Enter your username</label>
          <input type="text" placeholder="Enter your username" onChange={onHandleInput} name="username"/>
          <br></br>
          <label>Enter your Password</label>
          <input type="password" placeholder="Enter your password" onChange={onHandleInput} name="passowrd"/>
          <br></br>
          <button onClick={() => onRegister()}>Register</button>
        </div>
      </div>
      <h2>{registerForm.username}</h2>
      <h2>{registerForm.passowrd}</h2>
    </div>
  )
}

export default RegisterPage;