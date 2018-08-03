import * as React from 'react';
import './App.css';
import ProfileCardListItem from './ProfileCardListItem';

interface ProfileCardListItemContainerState {
    latestID: number
    name: string
    listItemContainer: Array<ProfileCardListItem>
}

class ProfileCardListItemContainer extends React.Component<{title : string}, ProfileCardListItemContainerState>
{
    title = this.props.title;
    constructor(props: any) {
        super(props);
        this.state = {
            latestID: 1,
            name: "",
            listItemContainer: []
        };
    }

    getLatestID(): number {
        return this.state.latestID;
    }

    addItem = () => {
        var x = new ProfileCardListItem(this.getLatestID(), this.state.name);
        this.setState({
            listItemContainer: this.state.listItemContainer.concat([x]),
            latestID : this.state.latestID + 1,
            name : ""
        })
    }
    updateName = (e: React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        })

    }

    render() {
        return <div>
            <ul className="list-group list-group-flush">
                {this.state.listItemContainer.map(x => <li className="list-group-item"> {x.name}</li>)} 
                <input type="text" onChange={this.updateName} value={this.state.name}/>
                <button type="button" onClick={this.addItem} className="btn btn-primary btn-sm">Add {this.title}</button>
            </ul>
        </div>
    }

}

export default ProfileCardListItemContainer; 