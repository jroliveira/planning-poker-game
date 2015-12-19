(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('socket', socket);

  socket.$inject = ['socketFactory'];

  /* @ngInject */
  function socket(socketFactory) {
    var server = null;

    try {
      server = io.connect('https://scrum-poker-api.herokuapp.com');
    } catch (err) {}

    var options = {
      ioSocket: server
    };

    var factory = socketFactory(options);
    factory.forward('connect');

    return factory;
  }

})();