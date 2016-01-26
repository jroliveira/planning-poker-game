(function () {
  'use strict';

  angular
    .module('app.core')
    .run(shakeRun);

  shakeRun.$inject = ['$ionicPlatform', '$rootScope', 'logger'];

  /* @ngInject */
  function shakeRun($ionicPlatform, $rootScope, logger) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (!window.shake || !window.shake.startWatch) {
        logger.error('Can not load plugin shake');
        return;
      }

      var sensitivity = 20;

      window.shake.startWatch(onShake, sensitivity, onError);
    }

    function onShake() {
      $rootScope.$emit('user:shake');
    }

    function onError(err) {
      logger.error('Shake on error: ' + JSON.stringify(err));
    }
  }

})();
