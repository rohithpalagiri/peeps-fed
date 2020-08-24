import React from 'react';

const AboutMe = () => {
    return (
        <div className="row about-me">
            <div className="col-12">
                <h4>About Me</h4>
            </div>
            <div className="col-md-5 col-12">
                <p className="copy">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero ante, finibus vel nisl fermentum, aliquam vehicula lacus. In quis gravida dui. Vivamus nec consectetur sapien, eu vestibulum leo. Fusce vel vulputate odio. Donec luctus elit quis lorem posuere, non mattis justo posuere. Donec venenatis, nunc vel tincidunt luctus, enim ex facilisis augue, at mollis quam tellus ac augue. In venenatis dapibus purus, id venenatis eros consectetur eget.
                </p>

                <p className="copy">
                    Phasellus vel maximus ante. Aliquam sollicitudin augue odio, pharetra luctus quam imperdiet ac. Suspendisse varius tortor ac risus finibus pretium. Praesent a lacus hendrerit, auctor nisi eget, tempus sem. Nulla facilisi. Etiam imperdiet in justo vel pharetra. Pellentesque porta nisi mi, nec rhoncus justo fermentum vel. Suspendisse varius tortor ac risus finibus pretium. Praesent a lacus hendrerit, auctor nisi eget, tempus sem. Nulla facilisi.
                </p>
            </div>
            <div className="col-md-6 offset-md-1 col-12">
                <div className="row user-qualifications">
                    <div className="col-md-4">
                        <div className="stat">
                            <h1>20</h1>
                            <p className="descriptor">Years Experience</p>
                            <a href="#">See My Portfolio</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="stat">
                            <h1>M.S.</h1>
                            <p className="descriptor">Human Computer Interaction</p>
                            <a href="#">Insert University</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="stat">
                            <h1>B.S.</h1>
                            <p className="descriptor">Psychology</p>
                            <a href="#">Insert University</a>
                        </div>
                    </div>
                </div>

                <div className="user-badges">
                    <p className="label">Recent Badges</p>
                    <ul className="badge-list">
                        <li><img src="https://via.placeholder.com/130x130" /></li>
                        <li><img src="https://via.placeholder.com/130x130" /></li>
                        <li><img src="https://via.placeholder.com/130x130" /></li>
                        <li><img src="https://via.placeholder.com/130x130" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe