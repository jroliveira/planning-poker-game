import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Cloud } from '@material-ui/icons';

import { Cards, Fab, Lobby, Message } from '../../components';
import Head from './Head';
import './Home.css';

const Home = ({ cards, me, message, players, internet }) => (
  <div>
    <Head />
    <main className="home">
      <Message message={ message } />
      <Lobby players={ players } />
      <Cards cards={ cards } />

      <Fab
        badge={ 2 }
        color="inherit"
        component={ Link }
        title="Login"
        to="/login"
        disabled={ !internet.connected }
        style={ classnames(
          { 'login-button--logged-out': me.id === '' && internet.connected },
          { 'login-button--logged-in': me.id !== '' && internet.connected },
          { 'login-button--disconnected': !internet.connected }
        ) }>
        <Cloud />
      </Fab>
    </main>
  </div>
);

Home.propTypes = {
  cards: PropTypes.object.isRequired,
  internet: PropTypes.object.isRequired,
  me: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  players: PropTypes.object.isRequired,
};

export default Home;
