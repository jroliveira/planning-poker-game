import React from 'react';

import { Theme } from './components';

import Router from './Router';
import './App.css';

const App = props => (
  <Theme>
    <Router {...props} />
  </Theme>
);

export default App;
