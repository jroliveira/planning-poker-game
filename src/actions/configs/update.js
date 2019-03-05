import { initialState } from '../../reducers';
import types from '../action-types';
import shared from '../../shared';

export default ({
  api = initialState.configs.api,
  online = initialState.configs.online,
  stories = initialState.configs.stories,
}) => {
  shared.api.configs.create(api);
  shared.api.configs.create(online);
  shared.api.configs.create(stories);

  return {
    type: types.CONFIG,
    configs: {
      api,
      online,
      stories,
    },
  };
};
