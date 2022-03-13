import React, {useState} from 'react';

const InboxPage = () => {
  const [profile, setProfile] = useState({
    name : "", age : "", desgination : "", location : ""
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