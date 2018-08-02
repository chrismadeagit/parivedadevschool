import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

import MyApp from './MyApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MyApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
