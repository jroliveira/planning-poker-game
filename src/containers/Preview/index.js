import { connect } from 'react-redux';
import actions from '../../actions';
import Preview from './Preview';
import selectors from '../../selectors';

export default connect((state) => ({
  me: state.me,
  message: state.message,
  players: selectors.players.getOthers(state.players, state.me.id),
  revealedCards: (playersRevealed) => selectors.players.revealedCards(selectors.players.getOthers(state.players, state.me.id), playersRevealed),
  socket: state.socket,
}), {
  sendMessage: actions.message.send,
})(Preview);
