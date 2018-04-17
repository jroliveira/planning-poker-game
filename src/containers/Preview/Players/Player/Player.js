import React from 'react';
import classnames from 'classnames';

import './Player.css';

const Player = props => (
  <div
    className={classnames(
      'players__player',
      {'players__player--points-equal': props.player.card && props.player.card === props.me.card},
      {'players__player--points-different': props.player.card && props.player.card !== props.me.card},
    )}
  >
    <div className="players__player-mark">
      <span dangerouslySetInnerHTML={{__html: props.player.card}} />
    </div>

    <div className="players__player-content">
      {props.player.name}
    </div>
  </div>
);

export default Player;
