(function () {
  'use strict';

  angular
    .module('app.core')
    .run(backButtonRun);

  backButtonRun.$inject = ['$ionicPlatform', '$ionicPopup', '$location', '$state', 'stir'];

  /* @ngInject */
  function backButtonRun($ionicPlatform, $ionicPopup, $location, $state, stir) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      $ionicPlatform.registerBackButtonAction(backButton, 101);
    }

    function backButton() {
      if ($state.current.name !== 'game.poker') {
        $location.url('/poker');
        return;
      }

      var options = {
        title: 'Confirm Exit',
        template: 'Are you sure you want to exit?'
      };

      var confirmPopup = $ionicPopup.confirm(options);
      confirmPopup.then(onConfirm);
    }

    function onConfirm(close) {
      if (!close) {
        return;
      }

      if (stir) {
        stir.deactivate();
      }

      ionic.Platform.exitApp();
    }
  }

})();