import { List } from 'immutable';

import { constants } from '../shared';

export default (state = new List(), action) => {
  switch (action.type) {
    case constants.actions.players:
      return new List(action.players);
    default:
      return state;
  }
};
