import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import Profile from './Profile';
import Interests from './interests';
import * as H from "history";
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import MyApp from './MyApp';

ReactDOM.render(
  <Router history={H.createBrowserHistory()}>
    <Switch>
      <Route path="/" exact={true} component={Profile}></Route>
      <Route path="/interests" component={Interests}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/myApp" componenet={MyApp}></Route>
    </Switch>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
