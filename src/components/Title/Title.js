import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';

const Title = ({ icon, label, onClick }) => (
  <AppBar>
    <Toolbar>
      <IconButton color="inherit" onClick={ onClick }>
        { icon }
      </IconButton>
      <Typography variant="h6" color="inherit" noWrap>
        { label }
      </Typography>
    </Toolbar>
  </AppBar>
);

Title.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

export default Title;
