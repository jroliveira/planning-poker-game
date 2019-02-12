import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft } from '@material-ui/icons';
import {
  Divider,
  List,
  ListItem,
  ListSubheader,
  TextField,
} from '@material-ui/core';

import { Title } from '../../components';
import './Settings.css';

export default class Settigs extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    configs: PropTypes.object.isRequired,
    updateConfigs: PropTypes.func.isRequired,
  };

  constructor({ configs }) {
    super();
    const { api, online, stories } = configs;

    this.state = {
      apiConfig: api.config,
      onlineConfig: online.config,
      storiesConfig: stories.config,
    };
  }

  componentWillUnmount() {
    const { apiConfig, onlineConfig } = this.state;

    this.props.updateConfigs({
      api: {
        name: 'api',
        config: {
          protocol: apiConfig.protocol,
          host: apiConfig.host,
          port: apiConfig.port,
        },
      },
      online: {
        name: 'online',
        config: {
          room: onlineConfig.room,
          name: onlineConfig.name,
        },
      },
    });
  }

  render = () => {
    const { apiConfig, onlineConfig } = this.state;

    return (
      <div>
        <Title
          label="Settings"
          icon={ <ChevronLeft /> }
          onClick={ this.handleBack } />

        <main className="settings-list">
          <List subheader={ <ListSubheader>Online</ListSubheader> }>
            <ListItem>
              <form className="settings-form" autoComplete="off">
                <TextField
                  id="onlineRoom"
                  label="Room"
                  value={ onlineConfig.room }
                  onChange={ this.handleInputChange((state, value) => ({ onlineConfig: { ...state.onlineConfig, room: value.toLowerCase() } })) } />

                <TextField
                  id="onlineName"
                  label="Name"
                  value={ onlineConfig.name }
                  onChange={ this.handleInputChange((state, value) => ({ onlineConfig: { ...state.onlineConfig, name: value.toLowerCase() } })) }
                  inputProps={ {
                    maxLength: '2',
                  } } />
              </form>
            </ListItem>
          </List>

          <Divider />

          <List subheader={ <ListSubheader>API</ListSubheader> }>
            <ListItem>
              <form className="settings-form" autoComplete="off">
                <TextField
                  id="apiProtocol"
                  label="Protocol"
                  value={ apiConfig.protocol }
                  onChange={ this.handleInputChange((state, value) => ({ apiConfig: { ...state.apiConfig, protocol: value.toLowerCase() } })) } />

                <TextField
                  id="apiHost"
                  label="Host"
                  value={ apiConfig.host }
                  onChange={ this.handleInputChange((state, value) => ({ apiConfig: { ...state.apiConfig, host: value.toLowerCase() } })) } />

                <TextField
                  id="apiPort"
                  label="Port"
                  value={ apiConfig.port }
                  onChange={ this.handleInputChange((state, value) => ({ apiConfig: { ...state.apiConfig, port: value } })) } />
              </form>
            </ListItem>
          </List>
        </main>
      </div>
    );
  };

  handleInputChange = (func) => (event) => {
    const { value } = event.target;

    this.setState((state) => func(state, value));
  };

  handleBack = () => {
    this.props.history.push('/');
  };
}
