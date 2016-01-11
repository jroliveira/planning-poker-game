(function () {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['navigator', 'insomnia', 'shake', 'shakeSensitivity', 'vibrateDuration'];

  /* @ngInject */
  function SettingsController(navigator, insomnia, shake, shakeSensitivity, vibrateDuration) {
    var vm = this;
    vm.keepScreen = {
      activated: true,
      active: keepScreenActive
    };

    vm.tap = {
      activated: true,
      active: shakeActive
    };

    vm.shake = {
      activated: true,
      sensitivity: shakeSensitivity,
      active: shakeActive
    };

    vm.vibrate = {
      activated: true,
      duration: vibrateDuration,
      active: shakeActive
    };

    vm.plugin = {
      keepScreen: insomnia && insomnia.keepAwake,
      shake: shake && shake.startWatch,
      vibrate: navigator && navigator.vibrate
    }

    function keepScreenActive() {

    }

    function shakeActive() {

    }
  }

})();