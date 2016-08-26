(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .run(shakeRun);

  shakeRun.$inject = ['$ionicPlatform', 'logger', 'agitate'];

  function shakeRun($ionicPlatform, logger, agitate) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (!window.shake || !window.shake.startWatch) {
        logger.error('Can not load plugin shake');
        return;
      }

      let sensitivity = 20;

      agitate.activate(sensitivity);
    }
  }

})();
