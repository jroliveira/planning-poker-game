(function() {
  'use strict';

  angular
    .module('planningPoker.home')
    .component('playersLoggedIn', {
      bindings: {
        players: '<',
      },
      templateUrl: '/src/app/game/home/players-logged-in/players-logged-in.html',
    });

})();
