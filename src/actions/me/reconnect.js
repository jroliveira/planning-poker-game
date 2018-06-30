import { initialState } from '../../reducers';
import { constants } from '../../shared';
import message from '../message';
import players from '../players';
import types from '../action-types';

export default () => ([
  message.send({ text: 'reconnecting...', type: constants.message.types.warning }),
  players.update(),
  {
    type: types.SOCKET,
    socket: initialState.socket,
  },
]);
