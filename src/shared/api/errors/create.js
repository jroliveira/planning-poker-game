import axios from 'axios';
import url from 'url';

import { constants } from '../..';

export default (error) => axios.post(url.resolve(constants.app.api.url, 'errors'), error);
