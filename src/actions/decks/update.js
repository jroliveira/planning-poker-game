import { List } from 'immutable';

import { initialState } from '../../reducers';
import types from '../action-types';

export default (decks = initialState.decks) => ({
  type: types.DECKS,
  decks: new List(decks),
});
