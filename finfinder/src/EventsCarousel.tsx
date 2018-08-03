import * as React from 'react';
import './App.css';

class EventsCarousel extends React.Component {
    render() {
        return <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="carousel-img d-block rounded mx-auto" src="https://i1.sndcdn.com/avatars-000322747613-cv0duo-t500x500.jpg"
                        alt="First slide" />
                    <p>
                       Book club Event. We gather every tuesday to discuss the latest and greatest novels from predetermined authors. 
                </p>
                </div>
                <div className="carousel-item">
                    <img className="carousel-img d-block rounded mx-auto" src="https://cbsla.files.wordpress.com/2015/04/shutterstock_1577856891.jpg?w=610&h=251&zoom=2"
                        alt="Second slide" />
                    <p>
                        Camping trip. We are going to scale the mountains and plant our flag. 
                </p>
                </div>
                <div className="carousel-item">
                    <img className="carousel-img d-block rounded mx-auto" src="https://geekandsundry.com/wp-content/uploads/2015/12/larps-cast-full-res.jpg"
                        alt="Third slide" />
                    <p>
                        Harry Potter LARP club 
                </p>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    }
}


export default EventsCarousel; 