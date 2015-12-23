(function () {
  'use strict';

  angular
    .module('app.core')
    .run(shakeRun);

  shakeRun.$inject = ['$ionicPlatform', '$rootScope', 'shake', 'logger'];

  /* @ngInject */
  function shakeRun($ionicPlatform, $rootScope, shake, logger) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (!shake || !shake.startWatch) {
        logger.error('Can not load plugin shake');
        return;
      }

      var sensitivity = 20;

      shake.startWatch(onShake, sensitivity, onError);
    }

    function onShake() {
      $rootScope.$emit('user:shake');
    }

    function onError(err) {
      logger.error('Shake on error: ' + JSON.stringify(err));
    }
  }

})();