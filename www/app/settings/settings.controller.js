(function () {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['shakeSensitivity', 'vibrateDuration'];

  /* @ngInject */
  function SettingsController(shakeSensitivity, vibrateDuration) {
    var vm = this;
    vm.keepScreen = {
      activated: true,
      activate: activateKeepScreen
    };
    vm.tap = {
      activated: true,
      activate: activateTap
    };
    vm.shake = {
      activated: true,
      sensitivity: shakeSensitivity,
      actiactivateve: activateShake
    };
    vm.vibrate = {
      activated: true,
      duration: vibrateDuration,
      activate: activateVibrate
    };
    vm.plugin = {
      keepAwake: window.plugins && window.plugins.insomnia && window.plugins.insomnia.keepAwake,
      stir: window.shake && window.shake.startWatch,
      vibrate: navigator && navigator.vibrate
    }

    function activateKeepScreen(active) {
      if (!window.plugins || !window.plugins.insomnia || !window.plugins.insomnia.keepAwake) {
        return;
      }

      if (active) {
        window.plugins.insomnia.keepAwake(null, onError);
      } else {
        window.plugins.insomnia.allowSleepAgain(null, onError);
      }
    }

    function activateTap() {

    }

    function activateShake(active) {
      if (!window.shake || !window.shake.startWatch) {
        return;
      }

      if (active) {
        var sensitivity = 20;

        window.shake.startWatch(onShake, sensitivity, onError);
      } else {
        window.shake.stopWatch();
      }
    }

    function activateVibrate() {

    }

    function onError(err) {
      logger.error(JSON.stringify(err));
    }
  }

})();
