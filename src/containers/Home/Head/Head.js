import React from 'react';
import { Menu as MenuIcon } from '@material-ui/icons';

import { Title } from '../../../components';
import Menu from './Menu';

export default class Head extends React.Component {
  state = {
    open: false,
  };

  render = () => (
    <div>
      <Title
        label={ process.env.REACT_APP_NAME }
        icon={ <MenuIcon /> }
        onClick={ this.handleClick } />

      <Menu
        onClose={ this.handleClick }
        open={ this.state.open } />
    </div>
  );

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
}
