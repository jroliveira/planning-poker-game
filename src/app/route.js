(function() {
  'use strict';

  angular
    .module('planningPoker')
    .config(router);

  router.$inject = ['$urlRouterProvider'];

  function router($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();
