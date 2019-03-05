import message from '../message';
import types from '../action-types';

export default (socket, { name, room }) => {
  if (room) {
    socket.emit('join', { name, room });
  }

  return [
    {
      type: types.SOCKET,
      socket,
    },
    message.send(),
    {
      type: types.INTERNET,
      internet: {
        connected: true,
      },
    },
  ];
};
