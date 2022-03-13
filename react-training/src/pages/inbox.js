import React, {useState} from 'react';
import axios from 'axios';

const InboxPage = () => {
  const [profile, setProfile] = useState({
    name : "", age : "", desgination : "", location : "", job: ""
  });

  const [userList, setUserList] = useState([]);

  const handleProfileForm = (event) => {
    // console.log(event.target.value, event.target.name)
    setProfile({...profile, [event.target.name] : event.target.value});
  }

  const createProfile = () => {
    console.log(profile)
    setUserList([...userList, profile])
  }

  const submitProfile = () => {
    const url = "https://reqres.in/api/users";

    console.log(profile);

    axios.post(url, profile)
      .then((response) => {
        console.log(response);
        alert("Profile has beeen created")
      })
      .catch((error) => {
        
        console.log(error)
      })
  }

  const userProfileList = userList.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.name}</td>
        <td>{value.age}</td>
        <td>{value.desgination}</td>
        <td>{value.location}</td>
      </tr>
    )
  });

  // console.log(userProfileList)

  return (
    <div>
      <label>Enter your Name</label>
      <input type="text" onChange={handleProfileForm} name="name"/>
      <br></br>
      <label>Enter your Job</label>
      <input type="text" onChange={handleProfileForm} name="job"/>
      <br></br>
      <label>Enter your Age</label>
      <input type="number" onChange={handleProfileForm} name="age"/>
      <br></br>
      <label>Enter your Designation</label>
      <input type="text" onChange={handleProfileForm}  name="desgination"/>
      <br></br>
      <label>Enter your Location</label>
      <input type="text" onChange={handleProfileForm} name="location"/>
      <br></br>
      <button onClick={() => createProfile()}>Create Profile</button>
      <button onClick={() => submitProfile()}>Submit to POST API</button>
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {userProfileList}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InboxPage;