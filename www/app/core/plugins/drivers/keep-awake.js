(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('keepAwake', keepAwake);

  keepAwake.$inject = ['logger'];

  /* @ngInject */
  function keepAwake(logger) {
    return {
      activate: activate,
      deactivate: deactivate
    };

    function activate() {
      if (!window.plugins || !window.plugins.insomnia || !window.plugins.insomnia.keepAwake) {
        return;
      }

      window.plugins.insomnia.keepAwake(null, onError);
    }

    function deactivate(data) {
      if (!window.plugins || !window.plugins.insomnia || !window.plugins.insomnia.allowSleepAgain) {
        return;
      }

      window.plugins.insomnia.allowSleepAgain(null, onError);
    }

    function onError(err) {
      logger.error('Insomnia on error: ' + JSON.stringify(err));
    }
  }

})();