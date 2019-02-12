import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft } from '@material-ui/icons';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  TextField,
} from '@material-ui/core';

import shared from '../../shared';
import { Title } from '../../components';
import './Stories.css';

export default class Stories extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    api: PropTypes.object.isRequired,
  };

  constructor({ api }) {
    super();

    this.state = {
      stories: [],
      points: undefined,
      config: api,
    };

    this.getStories(undefined);
  }

  async getStories(points) {
    const data = await shared.api.stories.getByProject(process.env.REACT_APP_DEFAULTS_PROJECT, { points }, this.state.config);

    if (data) {
      this.setState({ stories: data.data });
    }
  }

  render() {
    const { stories, points } = this.state;

    return (
      <div>
        <Title
          label="Stories"
          icon={ <ChevronLeft /> }
          onClick={ this.handleBack } />

        <main className="stories-list">
          <List subheader={ <ListSubheader>Search</ListSubheader> }>
            <ListItem className="settings-form">
              <TextField
                id="points"
                label="By points"
                type="number"
                value={ points }
                onBlur={ this.handlePointsBlur() }
                onChange={ this.handlePointsChange() } />
            </ListItem>
          </List>

          <Divider />

          <List>
            {
              stories.map((story) => (
                <ListItem key={ story.id }>
                  <ListItemText
                    primary={ `${story.id} (${story.points})` }
                    secondary={ story.title } />
                </ListItem>
              ))
            }
          </List>
        </main>
      </div>
    );
  }

  handlePointsBlur = () => (event) => {
    const { value } = event.target;

    this.getStories(value);
  };

  handlePointsChange = () => (event) => {
    const { value } = event.target;

    this.setState({ points: value });
  };

  handleBack = () => {
    this.props.history.push('/');
  };
}
