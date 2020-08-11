import React from 'react';

const Header = ({ profile_photo, name}) => {
    return (
      <div>
          <div className="login-header">
              <img className="login__photo" src={profile_photo} alt="userImg" />
              <h1>Hi, {name}!</h1>
          </div>
      </div>
    )
  }
  
  export default Header