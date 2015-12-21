(function () {
  'use strict';

  angular
    .module('app.core')
    .run(cordovaRun);

  cordovaRun.$inject = ['$ionicPlatform', 'cordova', 'StatusBar', 'insomnia', 'logger'];

  /* @ngInject */
  function cordovaRun($ionicPlatform, cordova, StatusBar, insomnia, logger) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (cordova && cordova.plugins && cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (StatusBar && StatusBar.styleLightContent) {
        StatusBar.styleDefault();
      }

      if (!insomnia && !insomnia.keepAwake) {
        logger.error('Can not load plugin insomnia');
      } else {
        insomnia.keepAwake(null, function (err) {
          logger.error('Insomnia on error: ' + JSON.stringify(err));
        });
      }
    }
  }

})();