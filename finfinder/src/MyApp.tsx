import * as React from 'react';
import './App.css';
import Interests from './interests';
import Profile from "./Profile";

interface IMyState {
    showInterests: boolean
}


class MyApp extends React.Component<{},IMyState> {
    constructor(p: any) {
        super(p);
        this.state = { showInterests: true }
    }
    public onToggle = () => {
        this.setState({ showInterests: !this.state.showInterests });
    }
    public render() {
        // return (<Interests/>)
        return (
        <div className="MyApp">
            <div>
                <button onClick={this.onToggle}>Toggle</button>
            </div>
            {this.state.showInterests ? <Interests /> : <Profile />}
        </div>

        );
    
    }
}

export default MyApp;
