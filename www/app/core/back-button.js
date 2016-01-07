(function () {
  'use strict';

  angular
    .module('app.core')
    .run(backButtonRun);

  backButtonRun.$inject = ['$ionicPlatform', '$ionicHistory', '$ionicPopup', 'shake'];

  /* @ngInject */
  function backButtonRun($ionicPlatform, $ionicHistory, $ionicPopup, shake) {
    $ionicPlatform.ready(onReady);

    function onReady() {
      $ionicPlatform.registerBackButtonAction(backButton, 101);
    }

    function backButton() {
      if ($ionicHistory.backView()) {
        $ionicHistory.goBack();
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
      if (close) {
        if (shake && shake.stopWatch) {
          shake.stopWatch();
        }

        ionic.Platform.exitApp();
      }
    }
  }

})();