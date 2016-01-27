(function () {
  'use strict';

  angular
    .module('app.core')
    .run(insomniaRun);

  insomniaRun.$inject = ['$ionicPlatform', 'logger', 'keepAwake'];

  /* @ngInject */
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