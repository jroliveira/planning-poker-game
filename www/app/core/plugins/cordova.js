(function () {
  'use strict';

  angular
    .module('app.core')
    .run(cordovaRun);

  cordovaRun.$inject = ['$ionicPlatform', 'cordova', 'logger'];

  /* @ngInject */
  function cordovaRun($ionicPlatform, cordova, logger) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (cordova && cordova.plugins && cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (cordova && cordova.InAppBrowser && cordova.InAppBrowser.open) {
        window.open = cordova.InAppBrowser.open;
      } else {
        logger.error('Can not load plugin inappbrowser');
      }
    }
  }

})();