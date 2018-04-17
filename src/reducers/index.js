import { combineReducers } from 'redux';

import cards from './cards';
import me from './me';
import message from './message';
import players from './players';

export default combineReducers({
  cards,
  me,
  message,
  players,
});
