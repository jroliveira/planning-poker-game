import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, Settings } from '@material-ui/icons';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Switch,
  TextField,
} from '@material-ui/core';

import api from '../../shared/api';
import { Title } from '../../shared/components';
import './Settings.css';

export default class Settigs extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    api.configs.getByName('online').then((data) => {
      if (data) {
        this.setState({ online: data.config });
      }
    });
  }

  state = {
    online: {
      room: '',
      name: '',
    },
  };

  componentWillUnmount() {
    const { online } = this.state;

    api.configs.create({
      name: 'online',
      config: {
        room: online.room,
        name: online.name,
      },
    });
  }

  render() {
    const { online } = this.state;

    return (
      <div>
        <Title
          label="Settings"
          icon={ <ChevronLeft /> }
          onClick={ this.handleBack } />

        <main className="settings-list">
          <List>
            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary="Keep screen on"
                secondary="Keeps the screen on as long as cards are on display." />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary="Tap to reveal"
                secondary="After choosing a card, tap the screen to reveal it." />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <Divider />

          <List subheader={ <ListSubheader>Online</ListSubheader> }>
            <ListItem>
              <form className="settings-form" autoComplete="off">
                <TextField
                  id="onlineRoom"
                  label="Room"
                  value={ online.room }
                  onChange={ this.handleInputChange((state, value) => ({ online: { ...state.online, room: value } })) } />

                <TextField
                  id="onlineName"
                  label="Name"
                  value={ online.name }
                  onChange={ this.handleInputChange((state, value) => ({ online: { ...state.online, name: value } })) } />
              </form>
            </ListItem>
          </List>

          <Divider />

          <List subheader={ <ListSubheader>Shake</ListSubheader> }>
            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary="Shake to reveal"
                secondary="After choosing a card, shake the phone to reveal it." />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary="Sensitivity"
                secondary="Choose shake sensitivity." />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <Divider />

          <List subheader={ <ListSubheader>Vibrate</ListSubheader> }>
            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary="Vibrate when shake"
                secondary="Vibrate the phone, when shake to reveal card." />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary="Time"
                secondary="Choose vibration time." />
              <ListItemSecondaryAction>
                <Switch />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </main>
      </div>
    );
  }

  handleInputChange = (func) => (event) => {
    const { value } = event.target;

    this.setState((state) => func(state, value));
  };

  handleBack = () => {
    this.props.history.push('/');
  };
}
