(function () {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['shakeSensitivity', 'vibrateDuration', 'agitate', 'keepAwake', 'vibration', 'touch'];

  /* @ngInject */
  function SettingsController(shakeSensitivity, vibrateDuration, agitate, keepAwake, vibration, touch) {
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
      sensitivity: {
        values: shakeSensitivity,
        change: changeSensitivity
      },
      activate: activateShake,
    };
    vm.vibrate = {
      activated: true,
      duration: {
        values: vibrateDuration,
        change: changeDuration
      },
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
      touch.activate(vm.tap.activated);
    }

    function activateShake() {
      if (vm.shake.activated) {
        agitate.activate(vm.shake.sensitivity.values.defaults);
      } else {
        agitate.deactivate();
      }
    }

    function changeSensitivity() {
      if (!vm.shake.activated) {
        return;
      }

      agitate.deactivate();
      agitate.activate(vm.shake.sensitivity.values.defaults);
    }

    function activateVibrate() {
      vibration.activate(vm.vibrate.activated);
    }

    function changeDuration() {
      vibration.update(vm.vibrate.duration.values.defaults.id);
    }
  }

})();