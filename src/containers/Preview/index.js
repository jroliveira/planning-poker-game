import { connect } from 'react-redux';
import Preview from './Preview';
import { players } from '../../selectors';

export default connect((state) => ({
  me: state.me,
  message: state.message,
  players: players.getOthers(state.players, state.me.id),
}), {})(Preview);
