import React from 'react';
import { Link } from 'react-router-dom';

import { constants } from '../../shared';
import { Card } from '..';
import './Cards.css';

const Cards = props => (
  <ul className="cards">
    {
      props.cards.map(card =>
        <li className="cards__card" key={card}>
          <Link to={`/cards/${constants.urlEscape[card] || card}`} title={`Card ${card}`}>
            <Card card={card} />
          </Link>
        </li>
      )
    }
  </ul>
);

export default Cards;
