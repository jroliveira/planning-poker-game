import initialState from './initial-state';
import types from '../actions/action-types';

export default (state = initialState.me, action) => {
  switch (action.type) {
    case types.ME:
      return action.me;
    default:
      return state;
  }
};
