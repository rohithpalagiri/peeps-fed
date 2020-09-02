import React from 'react';
import UserProfileHeader from './userprofileheader'
import UserTab from '../UserTab/UserTab'

import {match} from 'react-router'
import { MatchParams, User } from '../App/App'


interface Props {
    users: User[];
    match: match<MatchParams> | null;
}

const UserProfile: React.FC<Props> = ({ users, match }) => {
    
    const user = match
        ? users.find(user => user.id === Number(match.params.id))
        : null

    if (user) {
        return (
            <div>
                <UserProfileHeader
                    id={user.id}
                    bgImg={user.bgImg}
                    city={user.city}
                    department={user.department}
                    email={user.email}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    phone={user.phone}
                    profile_photo={user.profile_photo}
                    state={user.state}
                    title={user.title}
                    quote={user.quote}
                    quoteAuthor={user.quoteAuthor}
                />
                <UserTab />
            </div>
        )
    } else {
        return (
            <div>
                {/* Temporary, replace with Express Error Handling */}
                    Error!
            </div>
        )
    }

}

export default UserProfile