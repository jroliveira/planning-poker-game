import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { Cloud } from 'material-ui-icons';

import { Cards, Fab, Message } from '../../components';
import { Head } from './Head';
import Lobby from './Lobby';
import './Home.css';

const Home = props => (
  <div>
    <Head />
    <main className="home">
      <Message message={props.message} />
      <Lobby me={props.me} players={props.players} />
      <Cards cards={props.cards} />

      <Link to="/login" title="Login">
        <Fab
          config={{color:'inherit'}}
          icon={<Cloud />}
          style={classnames(
            {'login-button--logged-out': props.me.id === ''},
            {'login-button--logged-in': props.me.id !== ''},
          )}
        />
      </Link>
    </main>
  </div>
);

export default Home;
