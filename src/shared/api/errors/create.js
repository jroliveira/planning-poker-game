import axios from 'axios';

export default (error, config) => axios.post(`${config.protocol}://${config.host}:${config.port}/errors`, error);
