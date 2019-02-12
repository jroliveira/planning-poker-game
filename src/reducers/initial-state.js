import { List } from 'immutable';

export default {
  configs: {
    stories: {
      name: 'stories',
      config: {
        team: '',
      },
    },
    online: {
      name: 'online',
      config: {
        room: '',
        name: '',
      },
    },
    api: {
      name: 'api',
      config: {
        protocol: 'https',
        host: 'planning-poker-api.herokuapp.com',
        port: '443',
      },
    },
  },
  decks: new List(),
  internet: {
    connected: false,
  },
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
    emit: () => {},
  },
};
