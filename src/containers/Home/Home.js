import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Cloud } from '@material-ui/icons';

import { Fab, Message } from '../../shared/components';
import Cards from './Cards';
import Head from './Head';
import Lobby from './Lobby';
import './Home.css';

export default class Home extends React.Component {
  static propTypes = {
    cards: PropTypes.object.isRequired,
    getDecks: PropTypes.func.isRequired,
    me: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    players: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getDecks();
  }

  render() {
    const { cards, me, message, players, socket } = this.props;

    return (
      <div>
        <Head />
        <main className="home">
          <Message message={ message } />
          <Lobby me={ me } players={ players } />
          <Cards cards={ cards } />

          <Fab
            badge={ 2 }
            color="inherit"
            component={ Link }
            title="Login"
            to="/login"
            disabled={ !socket.connected }
            style={ classnames(
              { 'login-button--logged-out': me.id === '' && socket.connected },
              { 'login-button--logged-in': me.id !== '' && socket.connected },
              { 'login-button--disconnected': !socket.connected }
            ) }>
            <Cloud />
          </Fab>
        </main>
      </div>
    );
  }
}
