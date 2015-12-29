(function () {
  'use strict';

  angular
    .module('app.card')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('card', {
        cache: false,
        url: '/card/:card',
        templateUrl: 'app/card/card.html',
        controller: 'CardController as vm'
      });
  }

})();