(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .run(vibrateRun);

  vibrateRun.$inject = ['$ionicPlatform', 'logger'];

  function vibrateRun($ionicPlatform, logger) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (!navigator || !navigator.vibrate) {
        logger.error('Can not load plugin vibrate');
        return;
      }
    }
  }

})();
