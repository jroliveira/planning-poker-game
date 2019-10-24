import axios from 'axios';

export default (error, config) => {
  if (!config) {
    return;
  }

  return axios.post(`${config.protocol}://${config.host}:${config.port}/errors`, error);
};
