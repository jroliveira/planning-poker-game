import React from 'react';

import Player from './Player';
import './Players.css';

const Players = props => (
  <ul className="players">
    {
      props.players
        .filter(player => player.id !== props.me.id)
        .map(player =>
          <li key={player.id}>
            <Player me={props.me} player={player} />
          </li>
        )
    }
  </ul>
);

export default Players;
