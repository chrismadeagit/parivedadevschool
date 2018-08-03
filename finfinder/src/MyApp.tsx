import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import EventsCarousel from './EventsCarousel';
import ProfileCard from "./ProfileCard";

class MyApp extends React.Component {

    public render() {
        return (
            <div className="container border border-dark">
                <ProfileCard />
                <h2 className="display-4 text-center">Events</h2>
                <EventsCarousel />
                <Link to="interests">View interests</Link>
            </div>
        );




    }
}

export default MyApp;
