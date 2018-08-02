import * as React from 'react';
import './App.css';
import { Link } from 'react-router-dom';



class Interests extends React.Component {
    public render() {
        return (
            <div>
                <div className="jumbotron">

                    <h1 className="display-4">Your Interests</h1>
                    <p className="lead">These are activities or hobbies in which you have indicated interest.</p>
                    <hr className="my-4" />
                    <p>You can add interests, or explore groups and events related to a specific interest of yours.</p>
                    <div><Link to="">Return Home</Link></div>
                    <Link to="profile">View Profile</Link>

                    {/* <a className="btn btn-primary btn-md" href="myApp" role="button">Back to home!</a> */}
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body ">
                                <h3 className="card-title ">Interest1</h3>
                                <p className="card-text ">Text</p>
                                <a className="btn btn-success" href="https://www.google.com" id="learnmore">Learn More</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body ">
                                <h3 className="card-title ">Interest2</h3>
                                <p className="card-text ">Text</p>
                                <a className="btn btn-success" href="https://www.google.com" >Learn More</a>
                            </div>
                        </div>
                        <div className="card ">
                            <div className="card-body ">
                                <h3 className="card-title ">Interest3</h3>
                                <p className="card-text ">Text</p>
                                <a className="btn btn-success" href="https://www.google.com" >Learn More</a>
                            </div>
                        </div>
                    </div>
                    {/* <!--end of the first column--> */}
                    <div className="col-md-4" >
                        <h2>Explore Interests</h2>
                        <h3 className="text text-muted">Selected interests will appear here.</h3>
                        <div className="card">
                            <div className="card-body text-muted">Here is more information.</div>
                        </div>
                    </div>
                    {/* <!--end of second column--> */}

                    <div className="col-md-4" >
                        <h3 className="card-title">Add Interests</h3>
                        <select className="form-control" >
                            <option>Interest Name</option>
                        </select>
                        <select className="form-control" >
                            <option>Interest Level</option>
                        </select>
                        <button type="button" className="btn btn-primary">Add</button>

                    </div>

                </div>
            </div>

        );
    }
}

export default Interests;
