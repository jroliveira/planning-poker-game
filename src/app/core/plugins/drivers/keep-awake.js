(function() {
  'use strict';

  class KeepAwake {
    constructor(logger) {
      this._logger = logger;
    }

    activate() {
      if (!window.plugins || !window.plugins.insomnia || !window.plugins.insomnia.keepAwake) {
        return;
      }

      window.plugins.insomnia.keepAwake(null, this._onError);
    }

    deactivate(data) {
      if (!window.plugins || !window.plugins.insomnia || !window.plugins.insomnia.allowSleepAgain) {
        return;
      }

      window.plugins.insomnia.allowSleepAgain(null, this._onError);
    }

    _onError(err) {
      let message = `Insomnia on error: ${JSON.stringify(err)}`;
      this._logger.error(message);
    }
  }

  angular
    .module('planningPoker.core')
    .factory('keepAwake', KeepAwake);

  KeepAwake.$inject = ['logger'];

})();
