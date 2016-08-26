(function() {
  'use strict';

  class Agitate {
    constructor($rootScope, logger) {
      this._$rootScope = $rootScope;
      this._logger = logger;
    }

    activate(sensitivity) {
      if (!window.shake || !window.shake.startWatch) {
        return;
      }

      window.shake.startWatch(onShake, sensitivity, onError);

      let self = this;

      function onShake() {
        self._$rootScope.$emit('player:shake');
      }

      function onError(err) {
        let message = `Shake on error: ${JSON.stringify(err)}`;
        self._logger.error(message);
      }
    }

    deactivate() {
      if (!window.shake || !window.shake.stopWatch) {
        return;
      }

      window.shake.stopWatch();
    }
  }

  angular
    .module('planningPoker.core')
    .factory('agitate', Agitate);

  Agitate.$inject = ['$rootScope', 'logger'];

})();
