import React from 'react';
import { useState } from 'react';

import {
    Switch, Route, Link, useRouteMatch
} from "react-router-dom"

import Users from '../UserTile/usertile';
import Header from '../LoginHeader/loginHeader';
import UserSearchBox from '../UserSearch/usersearch';
import UserProfileHeader from '../UserProfile/userprofileheader';

const App = () => {
    const allUsers = [
        {
            name: 'Rohith Palagiri',
            bgImg: 'https://i.imgur.com/5nRp1bi.jpg',
            profile_photo: 'https://via.placeholder.com/150x150',
            id: 1,
            title: "Developer",
            department: "Software",
            team: 'engineering',
            client: 'ge',
            location: "Boston, MA",
            phone: "6173839007",
            email: "rpalagiri@rightpoint.com",
            quote: "\"To invent, you need a good imagination and a pile of junk.\"",
            quoteAuthor: 'Thomas Edison'
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
        department: "Software",
        location: "Boston, MA",
        phone: "6173839007",
        email: "rpalagiri@rightpoint.com",
        quote: "\"To invent, you need a good imagination and a pile of junk.\"",
        quoteAuthor: 'Thomas Edison'
    }

    const [users, setUsers] = useState(allUsers)

    const match = useRouteMatch('/user/:id')
    const user = match
        ? users.find(user => user.id === Number(match.params.id))
        : null

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
        <div>
            <Header name={loggedInUser.name} profile_photo={loggedInUser.profile_photo} />
            <Switch>
                <Route path="/user/:id">
                    <UserProfileHeader loggedInUser={user} />
                </Route>
                <Route path="/">
                    <div class="container">
                        <UserSearchBox handleSelectChange={handleSelectChange} handleInputChange={handleInputChange} />
                        <Users users={users} />
                    </div>
                </Route>
            </Switch>
        </div>

    )
}

export default App