(function() {
  'use strict';

  angular
    .module('planningPoker.settings')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('settings', {
        cache: true,
        url: '/settings',
        template: '<settings></settings>',
      });
  }

})();
