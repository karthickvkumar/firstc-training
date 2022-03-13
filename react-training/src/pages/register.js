import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
  const [message, setMessage] = useState("welcome to Fun comp");
  const [registerForm, setRegisterForm] = useState({
    username : '', passowrd : ''
  });

  const [registerFormError, setRegisterFormError] = useState({
    username : false, passowrd : false
  });

  const [displayImage, setDisplayImage] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

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
    //Validation using Loop
    Object.keys(registerForm).forEach((value, index) => {
      console.log(value, index)
      // TO get value form Object
      // 1. Static
      // objectName.key --> value

      // 2. Dynamic
      // objectName[key] --> value

      setRegisterFormError(previousState => {
        return {...previousState, [value]: registerForm[value] == "" ? true : false}
      });
    })

    //Check for UserName
    // setRegisterFormError(previousState => {
    //   return {...previousState, username: registerForm.username == "" ? true : false}
    // });

    // if(registerForm.username == ''){
    //   setRegisterFormError(previousState => {
    //     return {...previousState, username: true}
    //   });
    // }
    // else{
    //   setRegisterFormError(previousState => {
    //     return {...previousState, username: false}
    //   });
    // }
    
    // Check for passowrd
    // setRegisterFormError(previousState => {
    //   return {...previousState, passowrd: registerForm.passowrd == "" ? true : false}
    // });

    // if(registerForm.passowrd == ''){
    //   setRegisterFormError(previousState => {
    //     return {...previousState, passowrd: true}
    //   });
    // }
    // else{
    //   setRegisterFormError(previousState => {
    //     return {...previousState, passowrd: false}
    //   });
    // }
    
    // Check for Navigation
    if(registerForm.username != "" && registerForm.passowrd != ""){
      navigate("/home", {state : registerForm });
    }

  }

  const showImage = () => {
    setDisplayImage(true);
  }

  const hideImage = () => {
    setDisplayImage(false);
  }

  const enablePassowrd  = () => {
    setShowPassword(false);
  }
  
  const disablePassowrd  = () => {
    setShowPassword(true);
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
          
          <input type="text" placeholder="Enter your username" onChange={onHandleInput} name="username" className={registerFormError.username ? "input-error" : ""}/>
          {registerFormError.username && <span className="error-msg">Please enter a valid email id</span>}

          <br></br>
          <label>Enter your Password</label>
          
          <input type={showPassword ? "password" : "text"} placeholder="Enter your password" onChange={onHandleInput} name="passowrd" className={registerFormError.passowrd ? "input-error" : ""}/>
          {registerFormError.passowrd && <span className="error-msg">Please enter a valid password</span>}
          
          <div className="image-wrapper">
            {showPassword ? 
              <img src={require("../images/close-eye.png")} onClick={() => enablePassowrd()}/> 
              : 
              <img src={require("../images/open-eye.png")} onClick={() => disablePassowrd()}/>
            }

          </div>
          <br></br>
          <button onClick={() => onRegister()}>Register</button>
        </div>
      </div>
      <h2>{registerForm.username}</h2>
      <h2>{registerForm.passowrd}</h2>
      <div>
        <button onClick={() => showImage()}>Show Image</button>
        <button onClick={() => hideImage()}>Hide Image</button>
        { displayImage &&  
            <div>
              <img src={require("../images/shinchu.jpg")} className="image" />
              <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&fit=crop" className="image"/>
            </div> 
        }
        
      </div>
    </div>
  )
}

export default RegisterPage;