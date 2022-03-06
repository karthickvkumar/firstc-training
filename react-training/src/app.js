import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";

class App extends Component {

  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="signup" element={<RegisterPage/>}></Route>
          <Route path="home" element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;