import React from 'react';

import { TextField } from 'material-ui';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const TextBox = props => (
  <MuiThemeProvider theme={createMuiTheme({palette:{type:"light"}})}>
    <TextField {...props} />
  </MuiThemeProvider>
);

export default TextBox;
