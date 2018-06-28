import initialState from './initial-state';
import types from '../actions/action-types';

export default (state = initialState.message, action) => {
  switch (action.type) {
    case types.MESSAGE:
      return action.message;
    default:
      return state;
  }
};
