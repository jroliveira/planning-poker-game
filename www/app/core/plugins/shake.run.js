(function () {
  'use strict';

  angular
    .module('app.core')
    .run(shakeRun);

  shakeRun.$inject = ['$ionicPlatform', 'logger', 'agitate'];

  /* @ngInject */
  function shakeRun($ionicPlatform, logger, agitate) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (!window.shake || !window.shake.startWatch) {
        logger.error('Can not load plugin shake');
        return;
      }

      var sensitivity = 20;

      agitate.activate(sensitivity);
    }
  }

})();