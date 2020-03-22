import { createStore, compose, applyMiddleware } from 'redux';
import { reduxBatch } from '@manaflair/redux-batch';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const enhancer = compose(
  reduxBatch,
  applyMiddleware(thunk),
);

export default (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
  }

  return store;
};
