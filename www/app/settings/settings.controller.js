(function () {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['vibration', 'keepAwake', 'stir', 'shakeSensitivity', 'vibrateDuration'];

  /* @ngInject */
  function SettingsController(vibration, keepAwake, stir, shakeSensitivity, vibrateDuration) {
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
      keepAwake: !!keepAwake,
      stir: !!stir,
      vibrate: !!vibration
    }

    function activateKeepScreen(active) {
      if (!keepAwake) {
        return;
      }

      if (active) {
        keepAwake.activate();
      } else {
        keepAwake.deactivate();
      }
    }

    function activateTap() {

    }

    function activateShake(active) {
      if (!stir) {
        return;
      }

      if (active) {
        stir.activate();
      } else {
        stir.deactivate();
      }
    }

    function activateVibrate() {

    }
  }

})();