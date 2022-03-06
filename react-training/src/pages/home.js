import React from 'react';
import {useLocation} from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  console.log(location.state);
  return (
    <div>
      <h1>Home Page!!</h1>
      <h1>{location.state.username}</h1>
    </div>
  );
};

export default HomePage;