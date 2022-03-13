import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SentPage = () => {

  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    loadUserProfile();
  },[]);

  const loadUserProfile = () => {
    const api = "https://reqres.in/api/users?page=2";

    axios.get(api)
      .then((response) => {
        setProfileList(response.data.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const editProfile = (user) => {
    console.log(user)
  }
  
  const deleteProfile = (user) => {
    console.log(user)
  }

  const profiles = profileList.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>
          <img src={value.avatar} className="profile-pic"/>
        </td>
        <td>
          <button onClick={() => editProfile(value)}>Edit</button>
          <button onClick={() => deleteProfile(value)}>Delete</button>
        </td>
      </tr>
    )
  })
  
  return (
    <div>
      <h1>Send Page</h1>
      <button onClick={() => loadUserProfile()}>Load User Profile API</button>
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Profile Pic</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {profiles}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SentPage;