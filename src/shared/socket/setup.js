import openSocket from 'socket.io-client';

import { constants } from '..';
import { me, message, players } from '../../actions';

const events = {
  joined: 'joined',
  chosen: 'chosen',
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
  reconnecting: 'reconnecting',
  reconnectFailed: 'reconnect_failed',
};

export default (store) => {
  store.dispatch(message.send({ text: 'connecting...', type: constants.message.types.warning }));

  const socket = openSocket(constants.app.api.url);

  socket.on(events.connect, () => store.dispatch(me.connect(socket, store.getState().me)));
  socket.on(events.reconnecting, () => store.dispatch(me.reconnect()));
  socket.on(events.reconnectFailed, () => store.dispatch(me.disconnect()));

  socket.on(events.joined, (data) => store.dispatch(me.update(data)));
  socket.on(events.chosen, (data) => store.dispatch(me.update(data)));

  socket.on(events.user.joined, (data) => store.dispatch(players.update(data)));
  socket.on(events.user.left, (data) => store.dispatch(players.update(data)));
  socket.on(events.card.chosen, (data) => store.dispatch(players.update(data)));
  socket.on(events.card.revealed, (data) => store.dispatch(players.update(data)));
  socket.on(events.card.cleared, (data) => store.dispatch(players.update(data)));

  return socket;
};
