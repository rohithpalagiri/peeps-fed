import React from 'react';

const UserTile = ({ profile_photo, bgImg, name, title, department, id }) => {
  return (
    <div key={id} className="usertile">
      <div className="profile-bg">
        <img src={bgImg} alt="bg" />
      </div>
      <div className="user-content">
        <img className="profile-photo" src={profile_photo} alt="profile" />
        <h4>{name}</h4>
        <h5 className="mb-4">{title}</h5>
        <p class="department">{department}</p>
      </div>
    </div>
  )
}

const Users = ({users}) => {
  return (
    <div className="row">
      {users.map((x) => {
        return (
          <div className="col-md-3 col-2">
            <UserTile name={x.name} profile_photo={x.profile_photo} id={x.id} title={x.title} department={x.department} bgImg={x.bgImg}/>
          </div>
        )
      })}
    </div>
  )
}

export default Users