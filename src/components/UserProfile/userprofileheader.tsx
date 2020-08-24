import React from 'react';
import { User } from '../App/App'
const ChatIcon = require('../../images/chat.svg') as string;


const UserProfileHeader: React.FC<User> = ({ bgImg, quote, quoteAuthor, profile_photo, first_name, last_name, title, department, city, state, email, phone }) => {
    return (
        <div>
            <div className="profile-bg">
                <img src={bgImg} alt="bg" />
            </div>
            <div className="container position-relative">
                <div className="user-profile-header">
                    <div className="user-quote">
                        <p className="quote">{quote}</p>
                        <p className="quote-author mb-0">-{quoteAuthor}</p>
                    </div>
                    <div className="row header-container">
                        <div className="col-md-3 col-12 d-flex justify-content-center">
                            <img className="profile-photo" src={profile_photo} alt="profile" />
                        </div>
                        <div className="col-md-3 d-flex align-items-end">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="name">{first_name} {last_name}</h1>
                                </div>
                                <div className="col-12">
                                    <div className="work-details">
                                        <h5 className="title">{title}</h5>, <h5 className="department">{department}</h5>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <p className="location mb-0">{city}, {state}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-2 d-flex align-items-end">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <div>
                                        <img className="contact-icon" src={ChatIcon} alt="chat" /> {email}
                                    </div>

                                </div>
                                <div className="col-12 mb-3">
                                    <p className="label" style={{ display: "inline" }}>Phone: </p> {phone}
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="contact-section">
                                        <div>
                                            <img className="contact-icon" src={ChatIcon} alt="icon" />
                                            Chat
                                        </div>
                                        <div>
                                            <img className="contact-icon" src={ChatIcon} alt="icon" />
                                            Video
                                        </div>
                                        <div>
                                            <img className="contact-icon" src={ChatIcon} alt="icon" />
                                            LinkedIn
                                         </div>
                                        <div>
                                            <img className="contact-icon" src={ChatIcon} alt="icon" />
                                             Share
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default UserProfileHeader