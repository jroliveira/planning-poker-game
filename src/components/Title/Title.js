import React from 'react';

import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';

const Title = props => (
  <AppBar>
    <Toolbar>
      <IconButton color="inherit" onClick={props.onClick}>
        {props.icon}
      </IconButton>
      <Typography variant="title" color="inherit" noWrap>
        {props.label}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Title;
