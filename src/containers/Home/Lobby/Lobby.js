import React from 'react';
import PropTypes from 'prop-types';

import './Lobby.css';

const Players = ({ players }) => (
  <ul className="lobby">
    {
      players.map((player) => (
        <li className="lobby__player" key={ player.id }>
          <div className="lobby__player-content">
            <span className="lobby__player-name">{ player.name }</span>
          </div>
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
