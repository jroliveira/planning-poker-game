import { constants } from '../shared';

export default (state = constants.defaults.message, action) => {
  switch (action.type) {
    case constants.actions.message:
      return action.message;
    default:
      return state;
  }
};
