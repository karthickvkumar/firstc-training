import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import MailPage from "./pages/mail";

import InboxPage from "./pages/inbox";
import SentPage from "./pages/sent";
import TrashPage from "./pages/trash";

import "./css/index.css";

class App extends Component {

  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="signup" element={<RegisterPage/>}></Route>
          <Route path="home" element={<HomePage/>}></Route>
          <Route path="mail" element={<MailPage/>}>
            <Route path="inbox" element={<InboxPage/>}></Route>
            <Route path="sent" element={<SentPage/>}></Route>
            <Route path="trash" element={<TrashPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;