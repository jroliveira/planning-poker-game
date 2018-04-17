import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { setup } from './shared/socket';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);
const socket = setup(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App socket={socket} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
