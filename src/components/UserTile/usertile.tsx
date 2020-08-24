import React from 'react';

import { Link } from "react-router-dom"

const UserTile = ({ profile_photo, bgImg, first_name, last_name, title, department, id, city, state }) => {
  return (
    <div key={id} className="usertile">
      <div className="profile-bg">
        <img src={bgImg} alt="bg" />
      </div>
      <div className="user-content">
        <img className="profile-photo" src={profile_photo} alt="profile" />
        <h4>{first_name} {last_name}</h4>
        <p className="title">{title}</p>
        <p className="department">{department}</p>
        <p className="location">{city}, {state}</p>
      </div>
    </div>
  )
}

const Users = ({ users }) => {
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
                state={x.state} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Users