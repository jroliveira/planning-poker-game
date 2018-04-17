import React from 'react';

import './Front.css';

const Front = props => (
  <div className="card">
    <div className="card__mark">
      <span dangerouslySetInnerHTML={{__html: props.card}} />
    </div>

    <div className="card__points">
      <span dangerouslySetInnerHTML={{__html: props.card}} />
    </div>

    <div className="card__mark-upside-down">
      <span dangerouslySetInnerHTML={{__html: props.card}} />
    </div>
  </div>
);

export default Front;
