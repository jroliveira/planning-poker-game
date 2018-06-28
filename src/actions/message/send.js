import { initialState } from '../../reducers';
import types from '../action-types';

export default (message = initialState.message) => ({
  type: types.MESSAGE,
  message,
});
