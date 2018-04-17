import React from 'react';
import classnames from 'classnames';

import { ArrowBack, Send } from 'material-ui-icons';

import { Fab, TextBox, Title } from '../../components';
import './Login.css';

export default class Login extends React.Component {
  room = {
    value: '',
  };
  name = {
    value: '',
  };

  handlerClick = () => {
    this.props.history.push('/');
  };

  handlerSubmit = event => {
    event.preventDefault();

    this.props.socket.emit('join', {
      name: this.name.value,
      room: this.room.value,
    });

    this.handlerClick();
  };

  render() {
    return (
      <div>
        <Title
          label="Login"
          icon={<ArrowBack />}
          onClick={this.handlerClick}
        />
        <form autoComplete="off" onSubmit={this.handlerSubmit}>
          <TextBox
            id="room"
            label="Room"
            inputRef={value => this.room = value}
            required />

          <TextBox
            id="name"
            label="Name"
            inputRef={value => this.name = value}
            required />

          <Fab
            config={{type:'submit', color:'primary'}}
            icon={<Send />}
            style={classnames('login-button')}
          />
        </form>
      </div>
    );
  }
}


