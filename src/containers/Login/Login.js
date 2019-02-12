import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ChevronLeft, Send } from '@material-ui/icons';

import { Fab, TextBox, Title } from '../../components';
import './Login.css';

export default class Login extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired,
    online: PropTypes.object.isRequired,
  };

  constructor({ online }) {
    super();

    this.state = {
      name: online.name,
      room: online.room,
    };
  }

  render = () => {
    const { name, room } = this.state;

    return (
      <div>
        <Title
          label="Login"
          icon={ <ChevronLeft /> }
          onClick={ this.handleBack } />
        <form className="login-form" autoComplete="off" onSubmit={ this.handleSubmit }>
          <TextBox
            name="room"
            label="Room"
            value={ room }
            onChange={ this.handleInputChange }
            required />

          <TextBox
            name="name"
            label="Name"
            value={ name }
            onChange={ this.handleInputChange }
            inputProps={ {
              maxLength: '2',
            } }
            required />

          <Fab
            type="submit"
            color="primary"
            style={ classnames('login-button') }>
            <Send />
          </Fab>
        </form>
      </div>
    );
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value.toLowerCase() });
  };

  handleBack = () => {
    this.props.history.push('/');
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, room } = this.state;

    this.props.socket.emit('join', { name, room });
    this.handleBack();
  };
}
