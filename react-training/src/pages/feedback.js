import React, {useState} from 'react';

const FeebackPage = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    firstName : "",
    lastName : "",
    userName: "",
    emailId: "",
    dateOfBirth: "",
    gender: "",
    hobbies: [],
    address: "",
    city : ""
  });

  const onHandleForm = (event) => {
    // console.log(event.target.value, event.target.name)
    if(event.target.name === "hobbies"){
      if(event.target.checked){
        feedbackForm.hobbies.push(event.target.value);
      }
      else{
        let index = feedbackForm.hobbies.findIndex((value) => {
          return value === event.target.value;
        });
        feedbackForm.hobbies.splice(index, 1);
      }

      setFeedbackForm({...feedbackForm, hobbies : feedbackForm.hobbies});
    }
    else{
      setFeedbackForm({...feedbackForm, [event.target.name] : event.target.value});
    }
  }

  const createAccount = () => {
    console.log(feedbackForm)
  }

  return (
    <div>
      <h1>Feeback Page</h1>
      <div>
        <label>Enter your First Name</label>
        <input type="text" placeholder='Enter your first name' onChange={onHandleForm} name="firstName"/>
      </div>
      <div>
        <label>Enter your Last Name</label>
        <input type="text" placeholder='Enter your last name' onChange={onHandleForm} name="lastName"/>
      </div>
      <div>
        <label>Enter your User Name</label>
        <input type="text" placeholder='Enter your user name' onChange={onHandleForm} name="userName"/>
      </div>
      <div>
        <label>Enter your Email ID</label>
        <input type="text" placeholder='Enter your email' onChange={onHandleForm} name="emailId"/>
      </div>
      <div>
        <label>Select your DOB</label>
        <input type="date" onChange={onHandleForm} name="dateOfBirth"/>
      </div>
      <div>
        <label>Select your Gender</label>
        <input type="radio" onChange={onHandleForm} name="gender" value="male"/>Male
        <input type="radio" onChange={onHandleForm} name="gender" value="female"/>Female
        <input type="radio" onChange={onHandleForm} name="gender" value="others"/>Others
      </div>
      <div>
        <label>Select your Hobbies</label>
        <input type="checkbox" onChange={onHandleForm} name="hobbies" value="cricket"/>Cricket
        <input type="checkbox" onChange={onHandleForm} name="hobbies" value="football"/>Football
        <input type="checkbox" onChange={onHandleForm} name="hobbies" value="baseball"/>Baseball
        <input type="checkbox" onChange={onHandleForm} name="hobbies" value="chess"/>Chess
        <input type="checkbox" onChange={onHandleForm} name="hobbies" value="hockey"/>Hockey
        <input type="checkbox" onChange={onHandleForm} name="hobbies" value="pubg"/>Pubg
      </div>
      <div>
        <label>Enter your Address</label>
        <textarea placeholder='Enter your address' onChange={onHandleForm} name="address"></textarea>
      </div>
      <div>
        <label>Select your City</label>
        <select defaultValue="" onChange={onHandleForm} name="city">
          <option value="" disabled>Please select any city</option>
          <option value="+001">Chennai</option>
          <option value="+021">Madurai</option>
          <option value="+041">Trichy</option>
          <option value="+020">Erode</option>
        </select>
      </div>
      <button onClick={() => createAccount()}>Create User Profile</button>
    </div>
  );
};

export default FeebackPage;