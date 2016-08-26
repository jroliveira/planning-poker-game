(function() {
  'use strict';

  class UsersApi {
    constructor(socket) {
      this._socket = socket;
    }

    join(room, player) {
      let credentials = {
        name: player,
        room: room,
      };

      this._socket.emit('join', credentials);
    }
  }

  angular
    .module('planningPoker.login')
    .factory('usersApi', UsersApi);

  UsersApi.$inject = ['socket'];

})();
