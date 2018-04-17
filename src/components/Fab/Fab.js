import React from 'react';
import classnames from 'classnames';

import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    color: theme.palette.common.white,
  },
});

const Fab = withStyles(styles)(props => {
  const config = props.config;
  return (
    <Button
      className={classnames(props.classes.fab, props.style)}
      variant="fab"
      {...config}
    >
      {props.icon}
    </Button>
)});

export default Fab;
