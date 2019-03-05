import { initialState } from '../../reducers';
import shared from '../../shared';
import message from '../message';
import types from '../action-types';

export default () => ([
  message.send({ text: 'disconnected', type: shared.constants.message.types.error }),
  {
    type: types.INTERNET,
    internet: initialState.internet,
  },
  {
    type: types.SOCKET,
    socket: initialState.socket,
  },
]);
