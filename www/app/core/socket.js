(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('socket', socket);

  socket.$inject = ['socketFactory', 'logger', 'angularLoad', '$q'];

  /* @ngInject */
  function socket(socketFactory, logger, angularLoad, $q) {
    var deferred = $q.defer();

    angularLoad
      .loadScript('https://scrum-poker-api.herokuapp.com/socket.io/socket.io.js')
      .then(done)
      .catch(error);

    function error() {
      logger.error('Can not load socket.io');

      deferred.resolve(null);
    }

    function done() {
      var server = io.connect('https://scrum-poker-api.herokuapp.com');

      var options = {
        ioSocket: server
      };

      var factory = socketFactory(options);
      factory.forward('connect');

      deferred.resolve(factory);
    }

    return deferred.promise;
  }

})();