(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('session', session);

  session.$inject = ['socket', 'handlerSession'];

  /* @ngInject */
  function session(socket, handlerSession) {
    var _client = null;

    return {
      isConnected: isConnected,
      isLogged: handlerSession.isLogged,
      getMessage: handlerSession.getMessage,
      getUsers: handlerSession.getUsers,
      load: load,
      join: join,
      chooseCard: chooseCard,
      revealCard: revealCard,
      clearCard: clearCard
    };

    function isConnected() {
      return !!_client;
    }

    function load() {
      socket.then(setup);

      function setup(client) {
        _client = client;
        handlerSession.setup(_client);
      }
    }

    function join(room, user) {
      if (!_client) {
        return;
      }

      _client.emit('join', {
        name: user,
        room: room
      });
    }

    function chooseCard(points) {
      if (!_client) {
        return;
      }

      _client.emit('card:chosen', points);
    }

    function revealCard(points) {
      if (!_client) {
        return;
      }

      _client.emit('card:reveal', points);
    }

    function clearCard() {
      if (!_client) {
        return;
      }

      _client.emit('card:cleared');
    }

    function getUsers() {
      handlerSession.getUsers();
    }
  }
})();
