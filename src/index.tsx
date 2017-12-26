import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './net/registerServiceWorker';
import './static/style/index.css';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
