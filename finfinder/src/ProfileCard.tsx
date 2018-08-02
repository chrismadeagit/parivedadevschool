import * as React from 'react';
import './App.css';
import ProfileCardListItemContainer from './ProfileCardListItemContainer'

class ProfileCard extends React.Component {
    public render() {
        return (
            <div className="container border border-dark">
                <div className="card-deck">

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Interests</h5>
                            <ul className="list-group list-group-flush">
                                <input type="text" />
                                <ProfileCardListItemContainer name=""/> 
                                <button type="button" className="btn btn-primary btn-sm">Add Interest</button>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Groups</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">LARP Club</li>
                                <button type="button" className="btn btn-primary btn-sm">Add Group</button>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Jack Reacher</h5>
                            <div className="border border-dark">
                                <img className="img-circle" width="250" height="auto" src="https://i.amz.mshcdn.com/-HFxamotb-rvb-H2hRAfXvkrClY=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F249686%2Fjack-reacher-never-go-back-movie.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;