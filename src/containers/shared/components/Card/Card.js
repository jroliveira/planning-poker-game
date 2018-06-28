import React from 'react';
import PropTypes from 'prop-types';

import Back from './Back';
import Front from './Front';

const Card = (props) => props.card ? <Front { ...props } /> : <Back />;

Card.propTypes = {
  card: PropTypes.string.isRequired,
};

export default Card;
