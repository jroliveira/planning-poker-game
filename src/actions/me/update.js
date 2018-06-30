import players from '../players';
import types from '../action-types';

export default (data) => ([
  players.update(data),
  {
    type: types.ME,
    me: {
      id: data.user.id,
      name: data.user.name,
      card: data.card || '',
      room: data.room,
    },
  },
]);
