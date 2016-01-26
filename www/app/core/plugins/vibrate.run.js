(function () {
  'use strict';

  angular
    .module('app.core')
    .run(vibrateRun);

  vibrateRun.$inject = ['$ionicPlatform', 'logger'];

  /* @ngInject */
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
