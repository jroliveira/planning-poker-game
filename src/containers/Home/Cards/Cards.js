import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { constants } from '../../../shared';
import { Card } from '../../shared/components';
import './Cards.css';

const Cards = ({ cards }) => (
  <ul className="cards">
    {
      cards.map((card) => (
        <li className="cards__card" key={ card }>
          <Link to={ `/cards/${constants.urlEscape[card] || card}` } title={ `Card ${card}` }>
            <Card card={ card } />
          </Link>
        </li>
      ))
    }
  </ul>
);

Cards.propTypes = {
  cards: PropTypes.object.isRequired,
};

export default Cards;
