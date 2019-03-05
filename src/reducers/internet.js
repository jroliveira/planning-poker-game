import initialState from './initial-state';
import types from '../actions/action-types';

export default (state = initialState.internet, action) => {
  switch (action.type) {
    case types.INTERNET:
      return action.internet;
    default:
      return state;
  }
};
