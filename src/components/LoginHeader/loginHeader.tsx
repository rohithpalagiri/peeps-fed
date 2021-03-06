import React from 'react';

interface Props {
  profile_photo: string;
  name: string;
}

const Header: React.FC<Props> = ({ profile_photo, name }) => {
  return (
    <div className="login-header">
      <div className="container">
        <img className="login__photo" src={profile_photo} alt="userImg" />
        <h1>Hi, {name}!</h1>
      </div>

    </div>
  )
}

export default Header