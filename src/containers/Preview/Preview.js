import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import shared from '../../shared';
import { Card, Message, Players } from '../../components';

import './Preview.css';

export default class Preview extends React.Component {
  static propTypes = {
    socket: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    players: PropTypes.object.isRequired,
    revealedCards: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.revealed = false;
    this.playersRevealed = [];
  }

  state = {
    card: '',
  };

  componentDidMount = () => this.props.socket.emit('card:chosen', this.props.match.params.card);

  render = () => {
    this.props.revealedCards(this.playersRevealed);

    return (
      <main className="preview">
        {!this.revealed && <IconButton aria-label="delete" onClick={ this.backHandleClick }>
          <ArrowBack />
        </IconButton>}
        <Message message={ this.props.message } />
        <Players me={ this.props.me } players={ this.props.players } />
        <div className="card-front" onClick={ this.cardHandleClick } role="button">
          <Card card={ this.state.card } />
        </div>
      </main>
    );
  };

  backHandleClick = () => {
    const { history, socket } = this.props;

    this.props.sendMessage();

    socket.emit('card:cleared');
    history.push('/');
  };

  cardHandleClick = () => {
    const { match, socket } = this.props;

    if (this.revealed) {
      if (this.playersRevealed < this.props.players.size)
      {
        this.props.sendMessage({ text: 'wait for all players to reveal their cards', type: shared.constants.message.types.warning });
        return;
      }

      this.backHandleClick();

      return;
    }

    this.setState({
      card: match.params.card,
    });

    socket.emit('card:reveal', match.params.card);
    this.revealed = true;
  };
}
