import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    Switch, Route, useRouteMatch
} from "react-router-dom"


import Users from '../UserTile/usertile';
import Header from '../LoginHeader/loginHeader';
import UserSearchBox from '../UserSearch/usersearch';
import UserProfile from '../UserProfile/UserProfile'
import { initializeUsers } from '../../reducers/userReducer';

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

    const dispatch = useDispatch()

    const users = useSelector(state => state.users)

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
    

    useEffect(() => {
        dispatch(initializeUsers())
    }, [dispatch])

    const match = useRouteMatch<MatchParams>('/user/:id')

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
                            locations={[...new Set(users.map(user => user.city))]}
                            departments={[...new Set(users.map(user => user.department))]}
                            clients={[...new Set(users.map(user => user.client))]}
                        />
                        <Users />
                    </div>
                </Route>
            </Switch>
        </div>

    )
}

export default App