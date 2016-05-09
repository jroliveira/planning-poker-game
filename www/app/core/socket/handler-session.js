(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('handlerSession', handlerSession);

  handlerSession.$inject = ['User', 'Room'];

  /* @ngInject */
  function handlerSession(User, Room) {
    var _client = null;
    var _user = null;
    var _room = null;
    var _message = {
      value: 'connecting...',
      type: 'warning'
    };

    return {
      isLogged: isLogged,
      getMessage: getMessage,
      getUsers: getUsers,
      setup: setup
    };

    function isLogged() {
      return !!_room;
    }

    function getMessage() {
      return _message;
    }

    function getUsers() {
      if (!_room) {
        return {};
      }

      return _room.users;
    }

    function setup(client) {
      if (_client) {
        return;
      }

      _client = client;
      _message = {};

      _client.on('joined', _logged);
      _client.on('chosen', _chosenCard);
      _client.on('revealed', _revealedCard);
      _client.on('cleared', _clearedCard);
      _client.on('user:joined', _updateUsers);
      _client.on('user:left', _updateUsers);
      _client.on('card:chosen', _updateUsers);
      _client.on('card:revealed', _updateUsers);
      _client.on('card:cleared', _updateUsers);
      _client.on('reconnect', _reconnect);
      _client.on('reconnecting', _disconnect('reconnecting...', 'warning'));
      _client.on('reconnect_failed', _disconnect('falha, reconectar', 'error'));
    }

    function _logged(data) {
      _message = {};
      _room = new Room(data.room);
      _user = new User(data.user.id, data.user.name, _room.name);
      _updateUsers(data);
    }

    function _chosenCard(data) {
      _user.choose(data.card);
      _updateUsers(data);
    }

    function _revealedCard(data) {
      _user.reveal();
      _updateUsers(data);
    }

    function _clearedCard(data) {
      _user.clearCard();
      _updateUsers(data);
    }

    function _reconnect(data) {
      if (!_user) {
        return;
      }

      _client.emit('join', {
        name: _user.name,
        room: _user.room
      });
    }

    function _disconnect(message, type) {
      return function(data) {
        _room = null;

        _message = {
          value: message,
          type: type
        };
      };
    }

    function _updateUsers(data) {
      if (!_room) {
        return;
      }

      _room.clearUsers();

      angular.forEach(data.users, function(user) {
        if (user.id !== _user.id) {
          _room.addUser(user.id, user.name);

          if (user.card) {
            _room.chooseCard(user.id, user.card.points);
          }
        }
      });
    }
  }
})();
