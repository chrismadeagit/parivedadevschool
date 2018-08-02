import * as React from 'react';
import './App.css';
import ProfileCardListItem from './ProfileCardListItem';

interface ProfileCardListItemContainerState {
    latestID: number
    listItemContainer: Array<ProfileCardListItem>
}

class ProfileCardListItemContainer extends React.Component<{name: string}, ProfileCardListItemContainerState>
{
    constructor(props: any) {
        super(props);
        this.state = {
            latestID: 1,
            listItemContainer: []
        };
    }

    getLatestID(): number {
        return this.state.latestID;
    }

    addItem() {
        var x = new ProfileCardListItem(this.getLatestID(), this.props.name);
        this.setState({
            listItemContainer: this.state.listItemContainer.concat([x])
        })
    }

    render() {
        return <li className="list-group-item">{this.state.listItemContainer.map(x => x.name)} </li>
    }

}

export default ProfileCardListItemContainer; 