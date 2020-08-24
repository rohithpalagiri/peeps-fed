import React from 'react';

const Resume = () => {
    return (
        <div className="row resume">
            <div className="col-md-4 col-12">
                <h4 className="mb-5">Experience</h4>

                <div className="row mb-3">
                    <div className="col-3">
                        <img src="https://via.placeholder.com/130x130" />
                    </div>
                    <div className="col-9 job-content">
                        <p className="label title">Design Lead, Experience Design</p>
                        <p className="label">Rightpoint</p>
                        <p>April 2020 - Present</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-3">
                        <img src="https://via.placeholder.com/130x130" />
                    </div>
                    <div className="col-9 job-content">
                        <p className="label title">Design Lead, Experience Design</p>
                        <p className="label">Rightpoint</p>
                        <p>April 2020 - Present</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-3">
                        <img src="https://via.placeholder.com/130x130" />
                    </div>
                    <div className="col-9 job-content">
                        <p className="label title">Design Lead, Experience Design</p>
                        <p className="label">Rightpoint</p>
                        <p>April 2020 - Present</p>
                    </div>
                </div>
            </div>

            <div className="col-7 offset-md-1">
                <h4 className="mb-5">Achievements</h4>
                <div className="row achievements">
                    <div className="col-3">
                        <img src="https://via.placeholder.com/130x130" />
                    </div>
                    <div className="col-9">
                        <p className="label title">Award Name</p>
                        <p>Award Copy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero ante, finibus</p>
                        <div className="link-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume