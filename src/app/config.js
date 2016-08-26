(function() {
  'use strict';

  angular
    .module('planningPoker')
    .config(config);

  config.$inject = ['$ionicConfigProvider'];

  function config($ionicConfigProvider) {
    $ionicConfigProvider.views.transition('none');
  }

})();
