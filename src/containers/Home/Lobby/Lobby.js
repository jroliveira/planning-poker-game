import React from 'react';

import './Lobby.css';

const Players = props => (
  <ul className="lobby">
    {
      props.players
        .filter(player => player.id !== props.me.id)
        .map(player =>
          <li className="lobby__player" key={player.id}>
            <div className="lobby__player-content">
              <span className="lobby__player-name">{player.name}</span>
            </div>
          </li>
        )
    }
  </ul>
);

export default Players;
