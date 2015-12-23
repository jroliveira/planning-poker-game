(function () {
  'use strict';

  angular
    .module('app.core')
    .run(cordovaRun);

  cordovaRun.$inject = ['$ionicPlatform', 'cordova'];

  /* @ngInject */
  function cordovaRun($ionicPlatform, cordova) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (cordova && cordova.plugins && cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
    }
  }

})();