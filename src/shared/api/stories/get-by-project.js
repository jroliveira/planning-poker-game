import axios from 'axios';

export default (project, opt, config) => {
  const url = `${config.protocol}://${config.host}:${config.port}/projects/${project}/stories`;

  return axios.get(url, {
    params: opt,
  });
};
