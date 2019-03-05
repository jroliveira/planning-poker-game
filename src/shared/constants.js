export const app = {
  db: {
    name: 'planning-poker',
    version: 1.0,
    description: 'planning poker store',
  },
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
