import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Player.css';

const Player = ({ me, player }) => (
  <div
    className={ classnames(
      'players__player',
      { 'players__player--points-equal': player.card && player.card === me.card },
      { 'players__player--points-different': player.card && player.card !== me.card },
    ) }>
    <div className="players__player-mark">
      <span dangerouslySetInnerHTML={ { __html: player.card } } />
    </div>

    <div className="players__player-content">
      { player.name }
    </div>
  </div>
);

Player.propTypes = {
  me: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
};

export default Player;
