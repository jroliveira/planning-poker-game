(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .factory('onCardChosen', onCardChosen);

  onCardChosen.$inject = ['onDataUpdated', 'session'];

  function onCardChosen(onDataUpdated, session) {
    return function(data) {
      session.chooseCard(data.card);
      onDataUpdated(data);
    };
  }

})();
