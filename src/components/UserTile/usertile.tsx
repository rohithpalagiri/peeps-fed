/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'

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
        <div onClick={handleClick}><img src={ChatIcon} alt="chat"/></div>
        <div onClick={handleClick}><img src={MailIcon} alt="mail"/></div>
        <div onClick={handleClick}><img src={VideoIcon} alt="video"/></div>
        <div onClick={handleClick}><img src={PhoneIcon} alt="phone"/></div>
      </div>
    </div>
  )
}

const Users = () => {

  const handleContactBarClick = (e) => {
    e.preventDefault();
    console.log("Handle Microsoft Related Actions with this click")
  }

  const filter = useSelector(state => state.filter)

  const users = useSelector(({ filter, users }) => {
    if (filter.locationFilter !== 'all') users = users.filter(x => (x.city || '').toLowerCase().includes(filter.locationFilter.toLowerCase()))
    if (filter.clientFilter !== 'all') users = users.filter(x => (x.client || '').toLowerCase().includes(filter.clientFilter.toLowerCase()))
    if (filter.departmentFilter !== 'all') users = users.filter(x => (x.department || '').toLowerCase().includes(filter.departmentFilter.toLowerCase()))

    if (filter.userInput) {
      users = users.filter((x) =>
        x.first_name.toLowerCase().includes(filter.userInput.toLowerCase()) || x.last_name.toLowerCase().includes(filter.userInput.toLowerCase())
      )
    }
    return users
  })

  useEffect(() => {


  }, [filter]);

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