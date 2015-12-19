(function () {
  'use strict';

  angular
    .module('app.poker')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('poker', {
        url: '/poker',
        templateUrl: 'app/poker/poker.html',
        controller: 'PokerController as vm'
      });
  }
})();