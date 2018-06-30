import message from '../message';
import types from '../action-types';

export default (socket, { name, room }) => {
  if (room) {
    socket.emit('join', { name, room });
  }

  return [
    message.send(),
    {
      type: types.SOCKET,
      socket: {
        connected: true,
      },
    },
  ];
};
