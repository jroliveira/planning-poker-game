(function() {
  'use strict';

  class Touch {
    constructor() {
      this._activated = true;
    }

    activate(activated) {
      this._activated = activated;
    }

    isEnable() {
      return this._activated;
    }
  }

  angular
    .module('planningPoker.core')
    .factory('touch', Touch);

})();
