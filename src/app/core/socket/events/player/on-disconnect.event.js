(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .factory('onPlayerDisconnect', onPlayerDisconnect);

  onPlayerDisconnect.$inject = ['session', 'message'];

  function onPlayerDisconnect(session, message) {
    return execute;

    function execute(message, type) {
      return function() {
        session.disconnect();
        message.send(message, type);
      };
    }
  }

})();
