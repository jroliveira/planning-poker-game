import React from 'react';
import { Menu as MenuIcon } from '@material-ui/icons';

import { Title } from '../../../shared/components';
import { app } from '../../../shared/constants';
import Menu from './Menu';

export default class Head extends React.Component {
  state = {
    open: false,
  };

  render() {
    return (
      <div>
        <Title
          label={ app.name }
          icon={ <MenuIcon /> }
          onClick={ this.handleClick } />

        <Menu
          onClose={ this.handleClick }
          open={ this.state.open } />
      </div>
    );
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
}
