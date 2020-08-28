/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from "react-router-dom"

const ChatIcon = require('../../images/chat.svg') as string;
const VideoIcon = require('../../images/video-chat.svg') as string;
const PhoneIcon = require('../../images/phone.svg') as string;
const MailIcon = require('../../images/mail.svg') as string;
const DefaultBG = require('../../images/default_bg.png') as string

const UserTile = ({ profile_photo, bgImg, first_name, last_name, title, department, id, city, state, handleClick }) => {
  return (
    <div key={id} className="usertile">
      <div className="profile-bg">
        <img src={(bgImg || DefaultBG)} alt="bg" />
      </div>
      <div className="user-content">
        <img className="profile-photo" src={profile_photo} alt="profile" />
        <h4>{first_name} {last_name}</h4>
        <p className="title">{title}</p>
        <p className="department">{department}</p>
        <p className="location">{city}, {state}</p>
      </div>
      <div className="contact-bar">
        <div onClick={handleClick}><img src={ChatIcon} /></div>
        <div onClick={handleClick}><img src={MailIcon} /></div>
        <div onClick={handleClick}><img src={VideoIcon} /></div>
        <div onClick={handleClick}><img src={PhoneIcon} /></div>
      </div>
    </div>
  )
}

const Users = ({ users }) => {

  const handleContactBarClick= (e) => {
    e.preventDefault();
    console.log("Handle Microsoft Related Actions with this click")
  }

  return (
    <div className="row">
      {users.map((x) => {
        return (
          <div key={x.id} className="col-md-3 col-2">
            <Link className="user-link" to={`/user/${x.id}`}>
              <UserTile
                first_name={x.first_name}
                last_name={x.last_name}
                profile_photo={x.profile_photo}
                id={x.id} title={x.title}
                department={x.department}
                bgImg={x.bgImg}
                city={x.city}
                state={x.state}
                handleClick={handleContactBarClick}
                 />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Users