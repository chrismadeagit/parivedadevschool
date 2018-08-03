import * as React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';
import EventsCarousel from './EventsCarousel';

class App extends React.Component {
  public render() {
    return (
    <div className="container border border-dark">
        <ProfileCard/> 
        <h2 className="display-4 text-center">Events</h2>
        <EventsCarousel /> 
    </div>
    );
  }
}

export default App;
