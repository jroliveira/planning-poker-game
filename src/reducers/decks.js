import initialState from './initial-state';
import types from '../actions/action-types';

export default (state = initialState.decks, action) => {
  switch (action.type) {
    case types.DECKS:
      return action.decks;
    default:
      return state;
  }
};
