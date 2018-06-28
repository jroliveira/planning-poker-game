import localforage from 'localforage';

import { api, constants } from './shared';

const errorStore = localforage.createInstance({
  ...constants.app.db,
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
  await api.errors.create(log);

  return !constants.debug;
};
