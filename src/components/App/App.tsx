import React, { useState, useEffect } from 'react'
import userService from '../../services/users'

import {
    Switch, Route, useRouteMatch
} from "react-router-dom"

import Users from '../UserTile/usertile';
import Header from '../LoginHeader/loginHeader';
import UserSearchBox from '../UserSearch/usersearch';
import UserProfile from '../UserProfile/UserProfile'

export interface MatchParams {
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
    const [locationFilter, setLocationFilter] = useState('all')
    const [clientFilter, setClientFilter] = useState('all')
    const [departmentFilter, setDepartmentFilter] = useState('all')

    useEffect(() => {
        userService
            .getAll()
            .then(initialUsers => {
                setUsers(initialUsers)
                setAllUsers(initialUsers)
            })
    }, [])

    useEffect(() => {
        let filteredUsers = allUsers;
        if (locationFilter !== 'all') filteredUsers = filteredUsers.filter(x => (x.city || '').toLowerCase().includes(locationFilter.toLowerCase()))
        if (clientFilter !== 'all') filteredUsers = filteredUsers.filter(x => (x.client || '').toLowerCase().includes(clientFilter.toLowerCase()))
        if (departmentFilter !== 'all') filteredUsers = filteredUsers.filter(x => (x.department || '').toLowerCase().includes(departmentFilter.toLowerCase()))
        setUsers(filteredUsers);
    }, [locationFilter, clientFilter, departmentFilter, setUsers]);

    const match = useRouteMatch<MatchParams>('/user/:id')

    const handleInputChange = (e) => {
        e.preventDefault();
        let searchTerm = e.target.value;

        if (searchTerm && users) {
            setUsers(users.filter((x) =>
                x.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || x.last_name.toLowerCase().includes(searchTerm.toLowerCase())
            ))
        } else {
            setUsers(allUsers)
        }
    }

    const handleFilterChange = (type) => (e) => {
        e.preventDefault();
        let searchTerm = e.target.value;

        switch (type) {
            case 'location':
                setLocationFilter(searchTerm)
                break;
            case 'department':
                setDepartmentFilter(searchTerm)
                break;
            case 'client':
                setClientFilter(searchTerm)
                break;
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
                        <UserSearchBox
                            handleFilterChange={handleFilterChange}
                            handleInputChange={handleInputChange}
                            locations={[...new Set(allUsers.map(user => user.city))]}
                            departments={[...new Set(allUsers.map(user => user.department))]}
                            clients={[...new Set(allUsers.map(user => user.client))]}
                            locationValue={locationFilter}
                            clientValue={clientFilter}
                            departmentValue={departmentFilter}
                        />
                        <Users users={users} />
                    </div>
                </Route>
            </Switch>
        </div>

    )
}

export default App