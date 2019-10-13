import { createStore, compose, applyMiddleware } from 'redux';
import { reduxBatch } from '@manaflair/redux-batch';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import { DevTools } from '../containers';

const enhancer = compose(
  reduxBatch,
  applyMiddleware(thunk),
  DevTools.instrument(),
);

export default (initialState) => createStore(
  rootReducer,
  initialState,
  enhancer,
);
