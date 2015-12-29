(function () {
  'use strict';

  angular
    .module('app.login')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('login', {
        cache: false,
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController as vm'
      });
  }

})();