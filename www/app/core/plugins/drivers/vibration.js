(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('vibration', vibration);

  function vibration() {
    var _activated = true;
    var _duration = 1000;

    return {
      activate: activate,
      update: update,
      vibrate: vibrate
    };

    function activate(activated) {
      _activated = activated;
    }

    function update(duration) {
      _duration = duration * 1000;
    }

    function vibrate() {
      if (!navigator || !navigator.vibrate) {
        return;
      }

      if (!_activated) {
        return;
      }

      navigator.vibrate(_duration);
    }
  }

})();