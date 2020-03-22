import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(1) * 2,
    right: theme.spacing(1) * 2,
    color: theme.palette.common.white,
  },
});

const FabCustom = ({ classes, children, style, ...config }) => (
  <Fab
    className={ classnames(classes.fab, style) }
    variant="round"
    { ...config }>
    { children }
  </Fab>
);

FabCustom.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  style: PropTypes.string.isRequired,
};

export default withStyles(styles)(FabCustom);
