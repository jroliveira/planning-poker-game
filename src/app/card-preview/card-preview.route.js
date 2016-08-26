(function() {
  'use strict';

  angular
    .module('planningPoker.cardPreview')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('card', {
        cache: false,
        url: '/card/:card',
        template: '<card-preview></card-preview>',
      });
  }

})();
