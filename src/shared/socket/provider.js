import React from 'react';

export default (socket) => (ChildComponent) => function SocketProvider(props) {
  return (
    <ChildComponent
      socket={ socket }
      { ...props } />
  );
};
