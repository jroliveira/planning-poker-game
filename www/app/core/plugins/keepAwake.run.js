(function () {
  'use strict';

  angular
    .module('app.core')
    .run(keepAwakeRun);

  keepAwakeRun.$inject = ['$ionicPlatform', 'keepAwake'];

  /* @ngInject */
  function keepAwakeRun($ionicPlatform, keepAwake) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (!keepAwake) {
        return;
      }

      keepAwake.activate();
    }
  }

})();