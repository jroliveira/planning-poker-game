import openSocket from 'socket.io-client';

import { chosen } from '../../actions/card';
import { joined } from '../../actions/player';
import { send } from '../../actions/message';
import { updated } from '../../actions';

import { constants } from '..';

const events = {
  joined: 'joined',
  chosen: 'chosen',
  revealed: 'revealed',
  cleared: 'cleared',
  user: {
    joined: 'user:joined',
    left: 'user:left',
  },
  card: {
    chosen: 'card:chosen',
    revealed: 'card:revealed',
    cleared: 'card:cleared',
  },
  connect: 'connect',
  reconnect: 'reconnect',
  reconnecting: 'reconnecting',
  reconnectFailed: 'reconnect_failed',
};

export default dispatch => {
  const socket = openSocket(constants.app.api.url);

  socket.on(events.connect, () => dispatch(send()));
  socket.on(events.reconnecting, dispatch(send('reconnecting...', 'warning')));
  socket.on(events.reconnectFailed, dispatch(send('falha, reconectar', 'error')));
  socket.on(events.joined, data => joined(data).map(action => dispatch(action)));

  socket.on(events.chosen, data => dispatch(chosen(data)));

  socket.on(events.user.joined, data => dispatch(updated(data)));
  socket.on(events.user.left, data => dispatch(updated(data)));
  socket.on(events.card.chosen, data => dispatch(updated(data)));
  socket.on(events.card.revealed, data => dispatch(updated(data)));
  socket.on(events.card.cleared, data => dispatch(updated(data)));

  return socket;
}
