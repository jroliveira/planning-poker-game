(function () {
  'use strict';

  angular
    .module('app.main')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game',
        abstract: true,
        templateUrl: 'app/main/main.html'
      });
  }
})();