import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route } from 'react-router-dom';

import { About, Login } from './components';
import { Home, Preview, Settings } from './containers';
import { withSocket } from './shared/socket';

const Router = ({ socket }) => {
  const withComponent = withSocket(socket);

  return (
    <HashRouter>
      <div className="panel">
        <Route exact path="/" component={ Home } />
        <Route path="/cards/:card" component={ withComponent(Preview) } />
        <Route path="/about" component={ About } />
        <Route path="/login" component={ withComponent(Login) } />
        <Route path="/settings" component={ Settings } />
      </div>
    </HashRouter>
  );
};

Router.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default Router;
