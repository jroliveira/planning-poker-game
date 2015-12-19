(function () {
  'use strict';

  angular
    .module('app.core')
    .run(backButtonRun);

  backButtonRun.$inject = ['$ionicPlatform', '$ionicPopup'];

  /* @ngInject */
  function backButtonRun($ionicPlatform, $ionicPopup) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      $ionicPlatform.registerBackButtonAction(backButton, 101);
    }

    function backButton(e) {
      var options = {
        title: 'Confirm Exit',
        template: "Are you sure you want to exit?"
      };

      var confirmPopup = $ionicPopup.confirm(options);
      confirmPopup.then(onConfirm);

      e.preventDefault();
      return false;
    }

    function onConfirm(close) {
      if (close) {
        ionic.Platform.exitApp();
      }
    }
  }

})();