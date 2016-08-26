(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .factory('onCardCleared', onCardCleared);

  onCardCleared.$inject = ['onDataUpdated', 'session'];

  function onCardCleared(onDataUpdated, session) {
    return function(data) {
      session.clearCard();
      onDataUpdated(data);
    };
  }

})();
