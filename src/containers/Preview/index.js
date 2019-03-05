import { connect } from 'react-redux';
import Preview from './Preview';
import selectors from '../../selectors';

export default connect((state) => ({
  me: state.me,
  message: state.message,
  players: selectors.players.getOthers(state.players, state.me.id),
  socket: state.socket,
}), {})(Preview);
