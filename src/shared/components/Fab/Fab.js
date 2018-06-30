import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    color: theme.palette.common.white,
  },
});

const Fab = ({ classes, children, style, ...config }) => (
  <Button
    className={ classnames(classes.fab, style) }
    variant="fab"
    { ...config }>
    { children }
  </Button>
);

Fab.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  style: PropTypes.string.isRequired,
};

export default withStyles(styles)(Fab);
