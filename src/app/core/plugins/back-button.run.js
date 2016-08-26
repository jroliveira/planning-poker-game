(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .run(backButtonRun);

  backButtonRun.$inject = ['$ionicPlatform', '$ionicPopup', '$state'];

  function backButtonRun($ionicPlatform, $ionicPopup, $state) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      $ionicPlatform.registerBackButtonAction(backButton, 151);
    }

    function backButton() {
      if ($state.current.name !== 'game.home') {
        $state.go('game.home');
        return;
      }

      const options = {
        title: 'Confirm Exit',
        template: 'Are you sure you want to exit?',
      };

      let confirmPopup = $ionicPopup.confirm(options);
      confirmPopup.then(onConfirm);
    }

    function onConfirm(close) {
      if (!close) {
        return;
      }

      if (window.shake && window.shake.stopWatch) {
        window.shake.stopWatch();
      }

      ionic.Platform.exitApp();
    }
  }

})();
