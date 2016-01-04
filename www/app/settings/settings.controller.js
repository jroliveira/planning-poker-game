(function () {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['navigator', 'insomnia', 'shake'];

  /* @ngInject */
  function SettingsController(navigator, insomnia, shake) {
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
      sensitivity: {
        min: 18,
        actual: 20,
        max: 38
      },
      active: shakeActive
    };

    vm.vibrate = {
      activated: true,
      duration: {
        actual: {
          id: '1',
          name: '1 sec.'
        },
        options: [
          {
            id: '1',
            name: '1 sec.'
          },
          {
            id: '2',
            name: '2 sec.'
          },
          {
            id: '3',
            name: '3 sec.'
          }
        ]
      },
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