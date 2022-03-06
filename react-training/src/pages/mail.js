import React from 'react';
import {Outlet, NavLink} from "react-router-dom";

const MailPage = () => {
  return (
    <div className='main-container'>
      <div className='header'></div>
      <div className='container'>
        <div className='sidebar'>
          <div>
            <NavLink to="/mail/inbox">Go to Inbox Page</NavLink>
          </div>
          <div>
            <NavLink to="/mail/sent">Go to Sent Page</NavLink>
          </div>
          <div>
            <NavLink to="/mail/trash">Go to Trash Page</NavLink>
          </div>
        </div>  
        <div className='content'>
          <Outlet></Outlet>
        </div>  
      </div>
    </div>
  );
};

export default MailPage;