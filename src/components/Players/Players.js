import React from 'react';
import PropTypes from 'prop-types';

import { Player } from '..';
import './Players.css';

const Players = ({ me, players }) => (
  <ul className="players">
    {
      players.map((player) => (
        <li key={ player.id }>
          <Player me={ me } player={ player } />
        </li>
      ))
    }
  </ul>
);

Players.propTypes = {
  me: PropTypes.object.isRequired,
  players: PropTypes.object.isRequired,
};

export default Players;
