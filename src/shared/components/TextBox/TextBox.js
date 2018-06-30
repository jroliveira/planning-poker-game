import React from 'react';
import { TextField } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const TextBox = (props) => (
  <MuiThemeProvider theme={ createMuiTheme({ palette: { type: 'light' } }) }>
    <TextField { ...props } />
  </MuiThemeProvider>
);

export default TextBox;
