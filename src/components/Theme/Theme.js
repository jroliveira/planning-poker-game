import React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blueGrey from "material-ui/colors/blueGrey";

import 'normalize.css';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: blueGrey[200],
      main: blueGrey[400],
      dark: blueGrey[600],
    },
  },
});

const Theme = props => (
  <MuiThemeProvider theme={theme}>
    {props.children}
  </MuiThemeProvider>
);

export default Theme;
