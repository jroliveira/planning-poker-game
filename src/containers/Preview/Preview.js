import React from 'react';

import { Card, Message } from '../../components';
import Players from './Players';
import './Preview.css';

export default class Preview extends React.Component {
  state = {};
  revealed = false;

  componentDidMount() {
    this.props.socket.emit('card:chosen', this.props.match.params.card);
  }

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

  render() {
    return (
      <main className="preview">
        <Message message={this.props.message} />
        <Players me={this.props.me} players={this.props.players} />
        <div className="card-front" onClick={this.handleClick}>
          <Card card={this.state.card} />
        </div>
      </main>
    );
  }
}
