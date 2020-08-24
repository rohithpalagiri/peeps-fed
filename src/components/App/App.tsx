import React, { useState, useEffect } from 'react'
import userService from '../../services/users'

import {
    Switch, Route, useRouteMatch
} from "react-router-dom"

// import User from '../UserProfile/UserProfile'

import Users from '../UserTile/usertile';
import Header from '../LoginHeader/loginHeader';
import UserSearchBox from '../UserSearch/usersearch';
import UserProfile from '../UserProfile/UserProfile'

export interface MatchParams{
    id?: string;
  }  

  export interface User {
    id?: number;
    first_name: string;
    last_name: string;
    email?: string;
    bgImg?: string;
    profile_photo?: string;
    title?: string;
    department?: string;
    client?: string;
    city?: string;
    state?: string;
    phone?: string;
    quote?: string;
    quoteAuthor?: string;
}

const App: React.FC<MatchParams> = () => {

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

    const [users, setUsers] = useState<User[]>([])
    const [allUsers, setAllUsers] = useState<User[]>([])

    useEffect(() => {
        userService
            .getAll()
            .then(initialUsers => {
                setUsers(initialUsers)
                setAllUsers(initialUsers)
            })
    }, [])

    const match = useRouteMatch<MatchParams>('/user/:id')

    const handleInputChange = (e) => {
        e.preventDefault();
        let searchTerm = e.target.value;

        if (searchTerm && users) {
            setUsers(users.filter((x) => x.first_name.toLowerCase().includes(searchTerm.toLowerCase())))
        } else {
            setUsers(allUsers)
        }
    }

    const handleSelectChange = (e) => {
        e.preventDefault();
        let searchTerm = e.target.value;
        let attr = e.target[e.target.selectedIndex].getAttribute('data-filter-type')
        
        console.log('searchterm: ', searchTerm);

        console.log('attr: ', attr);
        
        console.log('user: ', users);
        
        

        if (searchTerm !== "all" && users) {
            switch (attr) {
                case 'location':
                    setUsers(users.filter((x) => 
                        (x.city || '').toLowerCase().includes(searchTerm.toLowerCase())
                    ));
                    break;
                case 'team':
                    console.log('term: ', searchTerm);

                    setUsers(users.filter((x) => (x.department || '').toLowerCase().includes(searchTerm.toLowerCase())));
                    break;
                case 'client':
                    setUsers(users.filter((x) => (x.client || '').toLowerCase().includes(searchTerm.toLowerCase())));
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
                    <UserProfile match={match} users={users} />
                </Route>
                <Route path="/">
                    <div className="container">
                        <UserSearchBox handleSelectChange={handleSelectChange} handleInputChange={handleInputChange} />
                        <Users users={users} />
                    </div>
                </Route>
            </Switch>
        </div>

    )
}

export default App