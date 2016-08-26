(function() {
  'use strict';

  class Vibration {
    constructor() {
      this._activated = true;
      this._duration = 1000;
    }

    activate(activated) {
      this._activated = activated;
    }

    update(duration) {
      this._duration = duration * 1000;
    }

    vibrate() {
      if (!navigator || !navigator.vibrate) {
        return;
      }

      if (!this._activated) {
        return;
      }

      navigator.vibrate(this._duration);
    }
  }

  angular
    .module('planningPoker.core')
    .factory('vibration', Vibration);

})();
