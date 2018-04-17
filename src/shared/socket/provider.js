import React from 'react';

export default socket => ChildComponent => props => (
  <ChildComponent
    socket={socket}
    {...props}
  />
)
