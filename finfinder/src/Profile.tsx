import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// import * as ReactDOM from 'react-dom';


class Profile extends React.Component {
    public render() {
        return (
            <div>
                <div className="jumbotron">

                    <h1 className="display-4">Your Profile</h1>
                    <p className="lead">This is your profile, where you can view your basic information and update your profile picture.</p>
                    <div className="my-4">
                        <p>Your profile helps other Fins learn about you when you RSVP to an event!</p>
                        {/* <a className="btn btn-primary btn-md" href="#" role="button">Back to home</a> */}
                        <Link to="myApp">Back to Home</Link>
                        <Link to="interests">View interests</Link>
                    </div>
                </div>
                <div className="grid">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src="https://webiconspng.com/wp-content/uploads/2016/11/avatar_business_costume_male_man_office_user_icon_403022.png" alt="Card image cap" />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title mb-3">Nora Salmon</h5>
                                    <h6 className="card-subtitle mb-3 text-muted">Welcome, Nora!</h6>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Birthday: 8/20/1996</li>
                                        <li className="list-group-item">Start Date: 7/23/2018</li>
                                        <li className="list-group-item">Cohort: C1</li>
                                        <li className="list-group-item">Market: Dallas</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-header">
                                    Quote of the Day
                            </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>To err is human.</p>
                                        <footer className="blockquote-footer">Someone famous in
                                    <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Profile;