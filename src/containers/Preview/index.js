import { connect } from 'react-redux';
import Preview from './Preview';

export default connect(state => ({
  me: state.me,
  message: state.message,
  players: state.players,
}), {})(Preview);
