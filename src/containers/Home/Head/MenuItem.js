import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const MenuItem = props => (
  <Link to={props.to}>
    <ListItem button>
      <ListItemIcon>
        {props.children}
      </ListItemIcon>
      <ListItemText primary={props.label} />
    </ListItem>
  </Link>
);

export default MenuItem;
