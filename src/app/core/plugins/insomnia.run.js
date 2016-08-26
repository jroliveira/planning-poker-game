(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .run(insomniaRun);

  insomniaRun.$inject = ['$ionicPlatform', 'logger', 'keepAwake'];

  function insomniaRun($ionicPlatform, logger, keepAwake) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (!window.plugins || !window.plugins.insomnia || !window.plugins.insomnia.keepAwake) {
        logger.error('Can not load plugin insomnia');
        return;
      }

      keepAwake.activate();
    }
  }

})();
