import React from 'react';

import { ArrowBack, Public } from 'material-ui-icons';

import { Title } from '../../components';
import './About.css';

const About = props => (
  <div>
    <Title
      label="About"
      icon={<ArrowBack />}
      onClick={() => props.history.push('/')}
    />
    <main className="about-list">
      <div className="about-list__item">
        <div className="about__logo-image">
          <img src={"/img/logo.png"} width="96" height="96" alt="Logo" />
        </div>

        <div className="about__product-name">
          Planning Poker
        </div>

        <span>
          Progressive web app de planning poker.
        </span>
      </div>

      <div className="about-list__item">
        <h2 className="about__product-version">
          Version
          <p>2.0</p>
        </h2>
      </div>

      <div className="about-list__item">
        <a
          className="about__form-button"
          onClick={event => {
            event.preventDefault();
            window.open('https://github.com/planning-poker/planning-poker-game', '_system', 'location=yes');
          }
        }>
          <i className="about__form-icon">
            <Public />
          </i>
        </a>
      </div>
    </main>
  </div>
);

export default About;
