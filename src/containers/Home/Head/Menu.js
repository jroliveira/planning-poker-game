import React from 'react';

import { Drawer, Hidden, List } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { InfoOutline, SettingsApplications } from 'material-ui-icons';

import MenuItem from './MenuItem';
import './Menu.css';

const styles = () => ({
  paper: {
    width: 270,
  },
});

const Menu = withStyles(styles)(props => (
  <Hidden mdUp>
    <Drawer {...props}>
      <div className="menu__header">
        <img className="menu__logo-image" src="img/logo.png" height="65" width="65" alt="Logo" />

        <div className="menu__title">
          Planning Poker
        </div>
      </div>

      <List>
        <MenuItem label="About" to="/about">
          <InfoOutline />
        </MenuItem>
        <MenuItem label="Settings" to="/settings">
          <SettingsApplications />
        </MenuItem>
      </List>
    </Drawer>
  </Hidden>
));

export default Menu;
