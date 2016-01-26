(function () {
  'use strict';

  angular
    .module('app.core')
    .run(insomniaRun);

  insomniaRun.$inject = ['$ionicPlatform', 'logger'];

  /* @ngInject */
  function insomniaRun($ionicPlatform, logger) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (!window.plugins || !window.plugins.insomnia || !window.plugins.insomnia.keepAwake) {
        logger.error('Can not load plugin insomnia');
        return;
      }

      window.plugins.insomnia.keepAwake(null, onError);
    }

    function onError(err) {
      logger.error('Insomnia on error: ' + JSON.stringify(err));
    }
  }

})();
