(function() {
  'use strict';

  angular
    .module('planningPoker.login')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('login', {
        cache: false,
        url: '/login',
        template: '<login></login>',
      });
  }

})();
