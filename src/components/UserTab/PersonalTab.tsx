import React from 'react';

const PersonalTab = () => {
    return (
        <div className="row">
            <div className="col-12">
                <h4>My Life Outside Work</h4>
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
                <img className="personal-img" src="https://via.placeholder.com/580x390" alt="about me"/>

                <p className="caption">Image Caption</p>
            </div>
        </div>
    )
}

export default PersonalTab