import { createStore, applyMiddleware } from 'redux';
import { reduxBatch } from '@manaflair/redux-batch';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import reducers from '../reducers';

export default (initialState) => createStore(
  reducers,
  initialState,
  reduxBatch,
  applyMiddleware(thunk, reduxImmutableStateInvariant()),
);
