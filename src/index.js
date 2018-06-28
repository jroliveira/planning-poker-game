import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { setup } from './shared/socket';
import App from './App';
import errorHandler from './error-handler';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

window.onerror = errorHandler;
const store = configureStore();
const socket = setup(store);

ReactDOM.render(
  <Provider store={ store }>
    <App socket={ socket } />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
