import React from 'react';

import Back from './Back';
import Front from './Front';

const Card = props => {
  return props.card
    ? <Front {...props} />
    : <Back />;
};

export default Card;
