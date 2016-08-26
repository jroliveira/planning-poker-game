(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .factory('onPlayerJoined', onPlayerJoined);

  onPlayerJoined.$inject = ['onDataUpdated', 'session'];

  function onPlayerJoined(onDataUpdated, session) {
    return function(data) {
      session.join(data.user.id, data.user.name, data.room);
      onDataUpdated(data);
    };
  }

})();
