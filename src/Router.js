import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import { About, Home, Login, Preview, Settings, Stories } from './containers';

const Router = () => (
  <HashRouter>
    <div className="panel">
      <Route exact path="/" component={ Home } />
      <Route path="/cards/:card" component={ Preview } />
      <Route path="/about" component={ About } />
      <Route path="/login" component={ Login } />
      <Route path="/settings" component={ Settings } />
      <Route path="/stories" component={ Stories } />
    </div>
  </HashRouter>
);

export default Router;
