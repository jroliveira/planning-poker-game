import config from '../../package.json';

export const app = {
  name: 'Planning Poker',
  description: config.description,
  version: config.version,

  api: {
    url: 'https://planning-poker-api.herokuapp.com',
  },

  db: {
    name: 'planning-poker',
    version: 1.0,
    description: 'planning poker store',
  },

  defaults: {
    deck: 'fibonacci',
  },

  debug: true,
};

export const message = {
  types: {
    error: 'error',
    success: 'success',
    warning: 'warning',
  },
};

export const urlEscape = {
  '&#9749;': '%E2%98%95',
};

export default {
  app,
  message,
  urlEscape,
};
