(function() {
  'use strict';

  angular
    .module('planningPoker.home')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        cache: true,
        url: '/',
        parent: 'game',
        views: {
          menuContent: {
            template: '<home></home>',
          },
        },
      });
  }

})();
