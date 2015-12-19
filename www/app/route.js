(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$urlRouterProvider'];

  /* @ngInject */
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/poker');
  }

})();