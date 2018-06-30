import React from 'react';
import PropTypes from 'prop-types';

import './Front.css';

const Front = ({ card }) => (
  <div className="card">
    <div className="card__mark">
      <span dangerouslySetInnerHTML={ { __html: card } } />
    </div>

    <div className="card__points">
      <span dangerouslySetInnerHTML={ { __html: card } } />
    </div>

    <div className="card__mark-upside-down">
      <span dangerouslySetInnerHTML={ { __html: card } } />
    </div>
  </div>
);

Front.propTypes = {
  card: PropTypes.string.isRequired,
};

export default Front;
