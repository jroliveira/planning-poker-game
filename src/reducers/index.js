import { combineReducers } from 'redux';

import configs from './configs';
import decks from './decks';
import me from './me';
import message from './message';
import internet from './internet';
import players from './players';
import socket from './socket';

export { default as initialState } from './initial-state';

export default combineReducers({
  configs,
  decks,
  me,
  message,
  internet,
  players,
  socket,
});
