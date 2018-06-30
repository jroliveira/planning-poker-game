import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const MenuItem = ({ children, label, to }) => (
  <ListItem
    component={ Link }
    to={ to }
    title={ label }>
    <ListItemIcon>
      { children }
    </ListItemIcon>
    <ListItemText primary={ label } />
  </ListItem>
);

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default MenuItem;
