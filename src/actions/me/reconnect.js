import { initialState } from '../../reducers';
import shared from '../../shared';
import message from '../message';
import players from '../players';
import types from '../action-types';

export default () => ([
  message.send({ text: 'reconnecting...', type: shared.constants.message.types.warning }),
  players.update(),
  {
    type: types.INTERNET,
    internet: initialState.internet,
  },
]);
