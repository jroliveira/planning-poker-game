(function() {
  'use strict';

  angular
    .module('planningPoker.about')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('about', {
        cache: true,
        url: '/about',
        template: '<about></about>',
      });
  }

})();
