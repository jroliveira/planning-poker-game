(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('socket', socket);

  socket.$inject = ['socketFactory', 'logger', 'io'];

  /* @ngInject */
  function socket(socketFactory, logger, io) {
    if (!io || !io.connect) {
      logger.error('Can not load socket.io');
      return null;
    }

    var server = io.connect('https://scrum-poker-api.herokuapp.com');

    var options = {
      ioSocket: server
    };

    var factory = socketFactory(options);
    factory.forward('connect');

    return factory;
  }

})();