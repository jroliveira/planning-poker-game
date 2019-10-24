import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import { reduxBatch } from '@manaflair/redux-batch';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const enhancer = compose(
  reduxBatch,
  applyMiddleware(thunk),
  persistState(getDebugSessionKey())
);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);

  return matches && matches.length > 0 ? matches[1] : null;
}

export default (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
  }

  return store;
};
