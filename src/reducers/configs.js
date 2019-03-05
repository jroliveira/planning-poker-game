import initialState from './initial-state';
import types from '../actions/action-types';

export default (state = initialState.configs, action) => {
  switch (action.type) {
    case types.CONFIG:
      return action.configs;
    default:
      return state;
  }
};
