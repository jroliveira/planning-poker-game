(function() {
  'use strict';

  class SocketConfig {
    constructor(
      socketFactory,
      logger,
      angularLoad,
      appConfig,
      socket,
      message,
      eventsConfig
    ) {
      angularLoad
        .loadScript(`${appConfig.api.url}/socket.io/socket.io.js`)
        .then(done)
        .catch(error);

      function done() {
        const options = {
          ioSocket: io.connect(appConfig.api.url),
        };

        let factory = socketFactory(options);

        message.clear();
        socket.createWith(factory);
        eventsConfig.setup(factory);
      }

      function error() {
        logger.error('Can not load socket.io');
      }
    }
  }

  angular
    .module('planningPoker.core')
    .factory('socketConfig', SocketConfig);

  SocketConfig.$inject = [
    'socketFactory',
    'logger',
    'angularLoad',
    'appConfig',
    'socket',
    'message',
    'eventsConfig',
  ];

})();
