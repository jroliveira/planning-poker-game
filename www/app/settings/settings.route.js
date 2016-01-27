(function () {
  'use strict';

  angular
    .module('app.settings')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('settings', {
        cache: true,
        url: '/settings',
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsController as vm'
      });
  }

})();