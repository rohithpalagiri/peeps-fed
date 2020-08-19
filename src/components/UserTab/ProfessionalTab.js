import React from 'react';
import AboutMe from './AboutMe'
import ProfProjects from './ProfProjects'
import Colleagues from './Colleagues'
import Resume from './Resume'

const ProfessionalTab = () => {
    return (
        <React.Fragment>
            <AboutMe />
            <ProfProjects />
            <Colleagues />
            <Resume />
        </React.Fragment>
    )
}

export default ProfessionalTab