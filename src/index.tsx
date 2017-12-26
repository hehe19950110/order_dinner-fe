import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from './app/container/main';
import registerServiceWorker from './net/registerServiceWorker';

ReactDOM.render(<MainPage />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
