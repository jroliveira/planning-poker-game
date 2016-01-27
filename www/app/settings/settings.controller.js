(function () {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['shakeSensitivity', 'vibrateDuration', 'agitate', 'keepAwake'];

  /* @ngInject */
  function SettingsController(shakeSensitivity, vibrateDuration, agitate, keepAwake) {
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
      activate: activateShake
    };
    vm.vibrate = {
      activated: true,
      duration: vibrateDuration,
      activate: activateVibrate
    };
    vm.plugin = {
      keepAwake: window.plugins && window.plugins.insomnia && window.plugins.insomnia.keepAwake,
      agitate: window.shake && window.shake.startWatch,
      vibrate: navigator && navigator.vibrate
    }

    function activateKeepScreen() {
      if (vm.keepScreen.activated) {
        keepAwake.activate();
      } else {
        keepAwake.deactivate();
      }
    }

    function activateTap() {

    }

    function activateShake() {
      if (vm.shake.activated) {
        agitate.activate(vm.shake.sensitivity.defaults);
      } else {
        agitate.deactivate();
      }
    }

    function activateVibrate() {

    }
  }

})();