import React from 'react';

import MenuIcon from 'material-ui-icons/Menu';

import { Title } from '../../../components';
import Menu from './Menu';

export default class Head extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <div>
        <Title
          label="Planning Poker"
          icon={<MenuIcon/>}
          onClick={this.handleClick}
        />

        <Menu
          onClose={this.handleClick}
          open={this.state.open}
        />
      </div>
    );
  }
}
