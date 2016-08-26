(function() {
  'use strict';

  angular
    .module('planningPoker.game')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('game', {
        abstract: true,
        templateUrl: '/src/app/game/game.html',
      });
  }
})();
