(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .factory('onCardRevealed', onCardRevealed);

  onCardRevealed.$inject = ['onDataUpdated', 'session'];

  function onCardRevealed(onDataUpdated, session) {
    return function(data) {
      session.revealCard();
      onDataUpdated(data);
    };
  }

})();
