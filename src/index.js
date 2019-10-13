import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import actions from './actions';
import shared from './shared';
import App from './App';
import errorHandler from './error-handler';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

window.onerror = errorHandler;
const store = configureStore();

init();

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./showDevTools').default;

  showDevTools(store);
}

registerServiceWorker();

async function init() {
  const decks = await shared.api.decks.getAll();
  const api = await shared.api.configs.getByName('api');
  const stories = await shared.api.configs.getByName('stories');
  const online = await shared.api.configs.getByName('online');

  store.dispatch(actions.decks.update(decks));
  store.dispatch(actions.configs.update({ api, stories, online }));

  shared.socket.setup(store);
}
