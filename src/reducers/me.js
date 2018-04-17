import { constants } from '../shared';

export default (state = constants.defaults.me, action) => {
  switch (action.type) {
    case constants.actions.me:
      return action.me;
    default:
      return state;
  }
};
