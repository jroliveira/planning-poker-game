(function () {
  'use strict';

  angular
    .module('app.core')
    .run(cordovaRun);

  cordovaRun.$inject = ['$ionicPlatform', 'logger'];

  /* @ngInject */
  function cordovaRun($ionicPlatform, logger) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        window.cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.cordova && window.cordova.InAppBrowser && window.cordova.InAppBrowser.open) {
        window.open = window.cordova.InAppBrowser.open;
      } else {
        logger.error('Can not load plugin inappbrowser');
      }
    }
  }

})();
