import initialState from './initial-state';
import types from '../actions/action-types';

export default (state = initialState.socket, action) => {
  switch (action.type) {
    case types.SOCKET:
      return action.socket;
    default:
      return state;
  }
};
