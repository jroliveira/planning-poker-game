(function () {
  'use strict';

  angular
    .module('app.core')
    .run(insomniaRun);

  insomniaRun.$inject = ['$ionicPlatform', 'insomnia', 'logger'];

  /* @ngInject */
  function insomniaRun($ionicPlatform, insomnia, logger) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (!insomnia || !insomnia.keepAwake) {
        logger.error('Can not load plugin insomnia');
        return;
      }

      insomnia.keepAwake(null, onError);
    }

    function onError(err) {
      logger.error('Insomnia on error: ' + JSON.stringify(err));
    }
  }

})();