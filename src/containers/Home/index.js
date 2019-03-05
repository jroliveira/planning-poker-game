import { connect } from 'react-redux';

import selectors from '../../selectors';
import Home from './Home';

export default connect((state) => ({
  cards: selectors.cards.getByDeck(state.decks, process.env.REACT_APP_DEFAULTS_DECK),
  internet: state.internet,
  me: state.me,
  message: state.message,
  players: selectors.players.getOthers(state.players, state.me.id),
}), {})(Home);
