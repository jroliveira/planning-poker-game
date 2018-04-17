import { connect } from 'react-redux';
import Home from './Home';

export default connect(state => ({
  cards: state.cards,
  me: state.me,
  message: state.message,
  players: state.players,
}), {})(Home);
