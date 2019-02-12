import localforage from 'localforage';

import shared from './shared';

const errorStore = localforage.createInstance({
  ...shared.constants.app.db,
  storeName: 'error',
});

export default async (message, source, lineno, colno, error) => {
  const key = Date.now().toString();
  const log = {
    message,
    source,
    lineno,
    colno,
    error: {
      message: error.message,
      stack: error.stack,
    },
  };

  await errorStore.setItem(key, log);
  await shared.api.errors.create(log);

  return !process.env.REACT_APP_DEBUG;
};
