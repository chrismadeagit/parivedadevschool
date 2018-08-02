import * as React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';

class App extends React.Component {
  public render() {
    return (
    <div className="container border border-dark">
        <ProfileCard/> 
        <h2 className="display-4 text-center">Events1</h2>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="carousel-img d-block w-100 rounded mx-auto" src="https://i1.sndcdn.com/avatars-000322747613-cv0duo-t500x500.jpg"
                        alt="First slide"/>
                    <p>
                        Event Details go here
                    </p>
                </div>
                <div className="carousel-item">
                    <img className="carousel-img d-block w-100 rounded mx-auto" src="https://cbsla.files.wordpress.com/2015/04/shutterstock_1577856891.jpg?w=610&h=251&zoom=2"
                        alt="Second slide"/>
                    <p>
                        Event Details go here
                    </p>
                </div>
                <div className="carousel-item">
                    <img className="carousel-img d-block w-100 rounded mx-auto" src="https://geekandsundry.com/wp-content/uploads/2015/12/larps-cast-full-res.jpg"
                        alt="Third slide"/>
                    <p>
                        Event Details go here
                    </p>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="sr-only">Next</span>
            </a>
        </div>

    </div>
    );
  }
}

export default App;
