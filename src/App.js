import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

import Router from './Router';
import './App.css';
import 'normalize.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: blueGrey[200],
      main: blueGrey[400],
      dark: blueGrey[600],
    },
  },
});

const App = (props) => (
  <MuiThemeProvider theme={ theme }>
    <Router { ...props } />
  </MuiThemeProvider>
);

export default App;
