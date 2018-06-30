import { connect } from 'react-redux';

import { cards, decks, players } from '../../selectors';
import { constants } from '../../shared';
import Home from './Home';

export default connect((state) => ({
  cards: cards.getByDeck(state.decks, constants.app.defaults.deck),
  me: state.me,
  socket: state.socket,
  message: state.message,
  players: players.getOthers(state.players, state.me.id),
}), (dispatch) => ({
  getDecks: decks.getAll(dispatch),
}))(Home);
