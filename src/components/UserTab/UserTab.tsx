import React from 'react';

import ProfessionalTab from './ProfessionalTab'
import PersonalTab from './PersonalTab'

const UserTab: React.FC = () => {
    return (
        <div>
            <div className="container">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="professional-tab" data-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="true">Professional</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="personal-tab" data-toggle="tab" href="#personal" role="tab" aria-controls="personal" aria-selected="false">Personal</a>
                    </li>
                </ul>

            </div>
            <div className="seperator"></div>
            <div className="container">
                <div className="tab-content user-tab" id="myTabContent">
                    <div className="tab-pane professional-tab fade show active" id="professional" role="tabpanel" aria-labelledby="professional-tab">
                        <ProfessionalTab />
                    </div>
                    <div className="tab-pane personal-tab fade" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                        <PersonalTab />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserTab