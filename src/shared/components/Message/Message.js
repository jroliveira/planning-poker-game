import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { constants } from '../..';
import './Message.css';

const Message = ({ message }) => (
  <div
    className={ classnames(
      'message',
      { 'message--state-warning': message.type === constants.message.types.warning },
      { 'message--state-error': message.type === constants.message.types.error },
      { 'message--state-success': message.type === constants.message.types.success },
    ) }>
    { message.text }
  </div>
);

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
