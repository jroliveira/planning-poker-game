import localforage from 'localforage';

import { app } from '../../../shared/constants';
import create from './create';
import getByName from './get-by-name';

const configStore = localforage.createInstance({
  ...app.db,
  storeName: 'config',
});

export default {
  create: create(configStore),
  getByName: getByName(configStore),
};
