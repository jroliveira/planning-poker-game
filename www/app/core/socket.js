(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('socket', socket);

  socket.$inject = ['socketFactory', 'logger', 'io'];

  /* @ngInject */
  function socket(socketFactory, logger, io) {
    try {
      if (!io || !io.connect) {
        throw new Error('Can not load socket.io');
      }

      var server = io.connect('https://scrum-poker-api.herokuapp.com');

      var options = {
        ioSocket: server
      };

      var factory = socketFactory(options);
      factory.forward('connect');

      return factory;
    } catch (err) {
      var data = {
        exception: err
      };

      logger.error(err.message, data);

      return null;
    }
  }

})();