(function () {
  'use strict';

  angular
    .module('app.core')
    .run(appRun);

  appRun.$inject = ['$ionicPlatform', 'cordova', 'StatusBar'];

  /* @ngInject */
  function appRun($ionicPlatform, cordova, StatusBar) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (cordova && cordova.plugins && cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (StatusBar && StatusBar.styleLightContent) {
        StatusBar.styleDefault();
      }
    }
  }

})();