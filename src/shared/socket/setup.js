import openSocket from 'socket.io-client';

import shared from '..';
import actions from '../../actions';

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
  store.dispatch(actions.message.send({ text: 'connecting...', type: shared.constants.message.types.warning }));

  const { config: { protocol, host, port } } = store.getState().configs.api;
  const socket = openSocket(`${protocol}://${host}:${port}`);

  socket.on(events.connect, () => store.dispatch(actions.me.connect(socket, store.getState().me)));
  socket.on(events.reconnecting, () => store.dispatch(actions.me.reconnect()));
  socket.on(events.reconnectFailed, () => store.dispatch(actions.me.disconnect()));

  socket.on(events.joined, (data) => store.dispatch(actions.me.update(data)));

  socket.on(events.user.joined, (data) => store.dispatch(actions.players.update(data)));
  socket.on(events.user.left, (data) => store.dispatch(actions.players.update(data)));
  socket.on(events.card.revealed, (data) => store.dispatch(actions.players.update(data)));
  socket.on(events.card.cleared, (data) => store.dispatch(actions.players.update(data)));
};
