import React from 'react';
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Users from './components/UserTile/usertile'
import Header from './components/LoginHeader/loginHeader'
import UserSearchBox from './components/UserSearch/usersearch'
import './index.scss'

const App = () => {
  const allUsers = [
    {
      name: 'Rohith Palagiri',
      bgImg: 'https://i.imgur.com/5nRp1bi.jpg',
      profile_photo: 'https://via.placeholder.com/150x150',
      location: 'Boston',
      team: 'engineering',
      client: 'ge',
      id: 1,
      title: "Developer",
      department: "Software"
    },
    {
      name: 'Tom Brady',
      bgImg: 'https://i.imgur.com/5nRp1bi.jpg',
      profile_photo: 'https://via.placeholder.com/150x150',
      location: 'Tampa',
      team: 'finance',
      client: 'ge',
      id: 2,
      title: "Quarterback",
      department: "Offense"
    },
    {
      name: 'Rohith Palagiri',
      bgImg: 'https://i.imgur.com/5nRp1bi.jpg',
      profile_photo: 'https://via.placeholder.com/150x150',
      location: 'Boston',
      team: 'engineering',
      client: 'Rightpoint',
      id: 3,
      title: "Developer",
      department: "Software"
    },
    {
      name: 'Rohith Palagiri',
      bgImg: 'https://i.imgur.com/5nRp1bi.jpg',
      profile_photo: 'https://via.placeholder.com/150x150',
      location: 'Boston',
      team: 'engineering',
      client: 'Rightpoint',
      id: 4,
      title: "Developer",
      department: "Software"
    },

  ]

  const loggedInUser = {
    name: 'Rohith Palagiri',
    bgImg: 'https://i.imgur.com/5nRp1bi.jpg',
    profile_photo: 'https://via.placeholder.com/150x150',
    id: 1,
    title: "Developer",
    department: "Software"
  }

  const [users, setUsers] = useState(allUsers)

  const handleInputChange = (e) => {
    e.preventDefault();
    let searchTerm = e.target.value;

    if (searchTerm) {
      setUsers(users.filter((x) => x.name.toLowerCase().includes(searchTerm.toLowerCase())))
    } else {
      setUsers(allUsers)
    }
  }

  const handleSelectChange = (e) => {
    e.preventDefault();
    let searchTerm = e.target.value;
    let attr = e.target[e.target.selectedIndex].getAttribute('data-filter-type')

    if (searchTerm !== "all") {
      switch (attr) {
        case 'location':
          setUsers(users.filter((x) => x.location.toLowerCase().includes(searchTerm.toLowerCase())));
          break;
        case 'team':
          console.log('term: ', searchTerm);
          
          setUsers(users.filter((x) => x.team.toLowerCase().includes(searchTerm.toLowerCase())));
          break;
        case 'client':
          setUsers(users.filter((x) => x.client.toLowerCase().includes(searchTerm.toLowerCase())));
          break;
        default:
          setUsers(allUsers)
      }
    } else {
      setUsers(allUsers)
    }
  }

  return (
    <div className="container-fluid">
      <Header name={loggedInUser.name} profile_photo={loggedInUser.profile_photo} />
      <UserSearchBox handleSelectChange={handleSelectChange} handleInputChange={handleInputChange} />
      <Users users={users} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))