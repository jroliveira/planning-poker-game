import { combineReducers } from 'redux';

import decks from './decks';
import me from './me';
import message from './message';
import players from './players';
import socket from './socket';

export { default as initialState } from './initial-state';

export default combineReducers({
  decks,
  me,
  message,
  players,
  socket,
});
