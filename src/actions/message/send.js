import { constants } from '../../shared';

export default (text = '', type = '') => ({
  type: constants.actions.message,
  message: {
    text,
    type,
  },
})
