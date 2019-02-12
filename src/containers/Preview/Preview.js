import React from 'react';
import PropTypes from 'prop-types';

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
  };

  constructor() {
    super();
    this.revealed = false;
  }

  state = {
    card: '',
  };

  componentDidMount = () => this.props.socket.emit('card:chosen', this.props.match.params.card);

  render = () => (
    <main className="preview">
      <Message message={ this.props.message } />
      <Players me={ this.props.me } players={ this.props.players } />
      <div className="card-front" onClick={ this.handleClick } role="button">
        <Card card={ this.state.card } />
      </div>
    </main>
  );

  handleClick = () => {
    const { history, match, socket } = this.props;

    if (this.revealed) {
      socket.emit('card:cleared');
      history.push('/');

      return;
    }

    this.setState({
      card: match.params.card,
    });

    socket.emit('card:reveal', this.state.card);
    this.revealed = true;
  };
}
