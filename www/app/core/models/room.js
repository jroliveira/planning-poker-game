(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('Room', RoomFactory);

  RoomFactory.$inject = ['User'];

  /* @ngInject */
  function RoomFactory(User) {
    function Room(name) {
      this.name = name;
      this.users = {};
    }

    Room.prototype.addUser = function(id, name) {
      this.users[id] = new User(id, name, this.name);
    };

    Room.prototype.clearUsers = function() {
      this.users = {};
    };

    Room.prototype.anyUser = function() {
      var user;

      for (user in this.users) {
        if (this.users.hasOwnProperty(user)) {
          return true;
        }
      }

      return false;
    };

    Room.prototype.chooseCard = function(id, points) {
      this.users[id].choose(points);
    };

    return Room;
  }
})();
