export const cards = {
  fibonacci: ['0', '1', '2', '3', '5', '8', '13', '20', '40', '&infin;', '&quest;', '&#9749;'],
};

export const urlEscape = {
  '&#9749;': '%E2%98%95',
};

export const actions = {
  cards: 'CARDS',
  me: 'ME',
  message: 'MESSAGE',
  players: 'PLAYERS',
};

export const message = {
  types: {
    error: 'error',
    success: 'success',
    warning: 'warning',
  },
};

export const defaults = {
  me: {
    id: '',
    card: '',
  },
  message: {
    text: 'connecting...',
    type: message.types.warning,
  },
};

export const app = {
  api: {
    url: 'https://planning-poker-api.herokuapp.com',
  },
};
