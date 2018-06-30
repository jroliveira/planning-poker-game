import { List } from 'immutable';

import { initialState } from '../../reducers';
import types from '../action-types';

export default (data = { users: initialState.players }) => ({
  type: types.PLAYERS,
  players: new List(Object.values(data.users).filter((user) => user && user.id && typeof user !== 'function')),
});
