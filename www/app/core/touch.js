(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('touch', touch);

  function touch() {
    var _activated = true;

    return {
      activate: activate,
      isEnable: isEnable
    };

    function activate(activated) {
      _activated = activated;
    }

    function isEnable() {
      return _activated;
    }
  }

})();