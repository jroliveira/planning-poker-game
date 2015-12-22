(function () {
  'use strict';

  angular
    .module('app.core')
    .run(cordovaRun);

  cordovaRun.$inject = ['$rootScope', '$ionicPlatform', 'cordova', 'insomnia', 'shake', 'logger'];

  /* @ngInject */
  function cordovaRun($rootScope, $ionicPlatform, cordova, insomnia, shake, logger) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (cordova && cordova.plugins && cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (!insomnia && !insomnia.keepAwake) {
        logger.error('Can not load plugin insomnia');
      } else {
        insomnia.keepAwake(null, function (err) {
          logger.error('Insomnia on error: ' + JSON.stringify(err));
        });
      }

      if (!shake && !shake.startWatch) {
        logger.error('Can not load plugin shake');
      } else {
        shake.startWatch(function () {
          $rootScope.$emit('user:shake');
        }, 20, function (err) {
          logger.error('Shake on error: ' + JSON.stringify(err));
        });
      }
    }
  }

})();