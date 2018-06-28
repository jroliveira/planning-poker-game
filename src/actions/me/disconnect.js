import { initialState } from '../../reducers';
import { constants } from '../../shared';
import message from '../message';
import types from '../action-types';

export default () => ([
  message.send({ text: 'disconnected', type: constants.message.types.error }),
  {
    type: types.SOCKET,
    socket: initialState.socket,
  },
]);
