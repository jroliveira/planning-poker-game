(function() {
  'use strict';

  class SettingsController {
    get keepScreen() {
      return this._keepScreen;
    }

    get tap() {
      return this._tap;
    }

    get shake() {
      return this._shake;
    }

    get vibrate() {
      return this._vibrate;
    }

    get plugin() {
      return this._plugin;
    }

    constructor(
      shakeSensitivity,
      vibrateDuration,
      agitate,
      keepAwake,
      vibration,
      touch
    ) {
      this._keepScreen = {
        activated: true,
        activate: this._activateKeepScreen,
      };
      this._tap = {
        activated: true,
        activate: () => this._touch.activate(this._tap.activated),
      };
      this._shake = {
        activated: true,
        sensitivity: {
          values: shakeSensitivity,
          change: this._changeSensitivity,
        },
        activate: this._activateShake,
      };
      this._vibrate = {
        activated: true,
        duration: {
          values: vibrateDuration,
          change: this._changeDuration,
        },
        activate: () => this._vibration.activate(this._vibrate.activated),
      };
      this._plugin = {
        keepAwake: window.plugins && window.plugins.insomnia && window.plugins.insomnia.keepAwake,
        agitate: window.shake && window.shake.startWatch,
        vibrate: navigator && navigator.vibrate,
      };
    }

    _activateKeepScreen() {
      if (this._keepScreen.activated) {
        this._keepAwake.activate();
      } else {
        this._keepAwake.deactivate();
      }
    }

    _activateShake() {
      if (this._shake.activated) {
        this._agitate.activate(this._shake.sensitivity.values.defaults);
      } else {
        this._agitate.deactivate();
      }
    }

    _changeSensitivity() {
      if (!this._shake.activated) {
        return;
      }

      this._agitate.deactivate();
      this._agitate.activate(this._shake.sensitivity.values.defaults);
    }

    _changeDuration() {
      this._vibration.update(this._vibrate.duration.values.defaults.id);
    }
  }

  angular
    .module('planningPoker.settings')
    .component('settings', {
      controller: SettingsController,
      templateUrl: '/src/app/settings/settings.html',
    });

  SettingsController.$inject = [
    'shakeSensitivity',
    'vibrateDuration',
    'agitate',
    'keepAwake',
    'vibration',
    'touch',
  ];

})();
