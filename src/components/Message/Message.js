import React from 'react';
import classnames from 'classnames';

import { constants } from '../../shared';
import './Message.css';

const Message = props => (
  <div
    className={classnames(
      'message',
      {'message--state-warning': props.type === constants.message.types.warning},
      {'message--state-error': props.type === constants.message.types.error},
      {'message--state-success': props.type === constants.message.types.success},
    )}
  >
    {props.text}
  </div>
);

export default Message;
