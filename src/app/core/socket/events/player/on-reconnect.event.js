(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .factory('onPlayerReconnect', onPlayerReconnect);

  onPlayerReconnect.$inject = ['usersApi', 'session'];

  function onPlayerReconnect(usersApi, session) {
    return function() {
      if (session.player) {
        usersApi.join(session.room, session.player.name);
      }
    };
  }

})();
