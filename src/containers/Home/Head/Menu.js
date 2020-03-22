import React from 'react';
import PropTypes from 'prop-types';

import { Drawer, Hidden, IconButton, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ChevronLeft, InfoOutlined, SettingsApplications } from '@material-ui/icons';

import MenuItem from './MenuItem';
import './Menu.css';

const styles = () => ({
  paper: {
    width: 270,
  },
});

const Menu = (props) => (
  <Hidden mdUp>
    <Drawer
      { ...props }
      className="menu"
      variant="persistent"
      ModalProps={ { keepMounted: true } }>
      <div className="menu__header">
        <div className="menu__button-back">
          <IconButton onClick={ props.onClose }>
            { <ChevronLeft /> }
          </IconButton>
        </div>

        <img
          className="menu__logo-image"
          src={process.env.PUBLIC_URL + '/img/logo.png'}
          height="65"
          width="65"
          alt="Logo" />

        <div className="menu__title">
          { process.env.REACT_APP_NAME }
        </div>
      </div>

      <List>
        <MenuItem label="About" to="/about">
          <InfoOutlined />
        </MenuItem>
        <MenuItem label="Settings" to="/settings">
          <SettingsApplications />
        </MenuItem>
      </List>
    </Drawer>
  </Hidden>
);

Menu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(Menu);
