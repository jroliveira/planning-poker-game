import { connect } from 'react-redux';

import Login from './Login';

export default connect((state) => ({
  message: state.message,
  online: state.configs.online.config,
  socket: state.socket,
}), {})(Login);
