(function() {
  'use strict';

  angular
    .module('planningPoker.home')
    .constant('cardsStorage', {
      fibonacci: ['0', '1', '2', '3', '5', '8', '13', '20', '40', '&infin;', '?'],
    });

})();
