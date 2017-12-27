import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from './app/container/main';
import registerServiceWorker from './net/registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './Store';

ReactDOM.render(
  <Provider store={Store}>
    <MainPage />
  </Provider>  
  , document.getElementById('root') as HTMLElement);
registerServiceWorker();
