import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
//import Interests from './interests';
//import Profile from "./Profile";

class MyApp extends React.Component {

    public render() {
        return (
            <div>
                <Link to="interests">View interests</Link>

            </div>
        )




    }
}

export default MyApp;
