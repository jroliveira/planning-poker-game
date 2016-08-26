(function() {
  'use strict';

  angular
    .module('planningPoker.card')
    .component('card', {
      bindings: {
        points: '<',
      },
      templateUrl: '/src/app/blocks/card/card.html',
    });

})();
