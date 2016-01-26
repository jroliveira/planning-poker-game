(function () {
  'use strict';

  angular
    .module('app.core')
    .run(stirRun);

  stirRun.$inject = ['$ionicPlatform', 'stir'];

  /* @ngInject */
  function stirRun($ionicPlatform, stir) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      if (!stir) {
        return;
      }

      var sensitivity = 20;

      stir.activate(sensitivity);
    }
  }

})();