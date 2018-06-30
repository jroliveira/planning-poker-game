import { List } from 'immutable';

export default {
  decks: new List(),
  me: {
    id: '',
    name: '',
    card: '',
    room: '',
  },
  message: {
    text: '',
    type: '',
  },
  players: new List(),
  socket: {
    connected: false,
  },
};
