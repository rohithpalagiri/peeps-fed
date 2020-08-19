import React from 'react';
import UserProfileHeader from './userprofileheader'
import UserTab from '../UserTab/UserTab'

import { useRouteMatch } from "react-router-dom"

const UserProfile = ({ users }) => {

    const match = useRouteMatch('/user/:id')
    const user = match
        ? users.find(user => user.id === Number(match.params.id))
        : null

        console.log("user: " , users);
        


    return (
        <div>
            <UserProfileHeader loggedInUser = {user} />
            <UserTab />
        </div>
    )
}

export default UserProfile