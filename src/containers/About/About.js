import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, Public } from '@material-ui/icons';

import { Title } from '../../components';
import './About.css';

export default class About extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  render = () => (
    <div>
      <Title
        label="About"
        icon={ <ChevronLeft /> }
        onClick={ this.handleBack } />
      <main className="about-list">
        <div className="about-list__item">
          <div className="about__logo-image">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} width="96" height="96" alt="Logo" />
          </div>

          <div className="about__product-name">
            { process.env.REACT_APP_NAME }
          </div>

          <span>
            { process.env.REACT_APP_DESCRIPTION }
          </span>
        </div>

        <div className="about-list__item">
          <h2 className="about__product-version">
            Version
            <p>{ process.env.REACT_APP_VERSION }</p>
          </h2>
        </div>

        <div className="about-list__item">
          <button
            className="about__form-button"
            onClick={ this.handleChoose }>
            <i className="about__form-icon">
              <Public />
            </i>
          </button>
        </div>
      </main>
    </div>
  );

  handleBack = () => {
    this.props.history.push('/');
  };

  handleChoose = (event) => {
    event.preventDefault();
    window.open('https://github.com/jroliveira/planning-poker-game', '_system', 'location=yes');
  };
}
