(function() {
  'use strict';

  angular
    .module('planningPoker.cardPreview')
    .component('cardsRevelead', {
      bindings: {
        myCard: '<',
        players: '<',
      },
      templateUrl: '/src/app/card-preview/cards-revelead/cards-revelead.html',
    });

})();
