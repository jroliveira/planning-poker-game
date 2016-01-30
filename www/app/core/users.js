(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('users', users);

  users.$inject = ['User'];

  /* @ngInject */
  function users(User) {
    var _users = {};

    return {
      add: add,
      remove: remove,
      reset: reset,
      revealCard: revealCard,
      clearCards: clearCards,
      get: get,
      any: any
    };

    function add(data) {
      _users[data.id] = new User(data.name, null);
    }

    function remove(data) {
      delete _users[data.id];
    }

    function revealCard(data) {
      _users[data.userId].card = data.points;
    }

    function clearCards() {
      angular.forEach(_users, function (user) {
        user.card = null;
      });
    }

    function get() {
      return _users;
    }

    function reset() {
      _users = {};
    }

    function any() {
      var user;

      for (user in _users) {
        if (_users.hasOwnProperty(user)) {
          return true;
        }
      }

      return false;
    }
  }

})();