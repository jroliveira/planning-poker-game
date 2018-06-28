import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../shared/components';
import { Message } from '../../shared/components';
import Players from './Players';
import './Preview.css';

export default class Preview extends React.Component {
  static propTypes = {
    socket: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
    players: PropTypes.object.isRequired,
  };

  state = {
    card: '',
  };

  componentDidMount() {
    this.props.socket.emit('card:chosen', this.props.match.params.card);
  }

  render() {
    return (
      <main className="preview">
        <Message message={ this.props.message } />
        <Players me={ this.props.me } players={ this.props.players } />
        <div className="card-front" onClick={ this.handleClick }>
          <Card card={ this.state.card } />
        </div>
      </main>
    );
  }

  revealed = false;

  handleClick = () => {
    if (this.revealed) {
      this.props.socket.emit('card:cleared');
      this.props.history.push('/');

      return;
    }

    this.setState({
      card: this.props.match.params.card,
    });

    this.props.socket.emit('card:reveal', this.state.card);
    this.revealed = true;
  };
}
