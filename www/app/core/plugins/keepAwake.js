(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('keepAwake', keepAwake);

  keepAwake.$inject = ['insomnia', 'logger'];

  /* @ngInject */
  function keepAwake(insomnia, logger) {
    if (!insomnia || !insomnia.keepAwake) {
      logger.error('Can not load plugin insomnia');
      return null;
    }

    return {
      activate: activate,
      deactivate: deactivate
    }

    function activate() {
      insomnia.keepAwake(null, onError);
    }

    function deactivate() {
      insomnia.allowSleepAgain(null, onError);
    }

    function onError(err) {
      logger.error('Insomnia on error: ' + JSON.stringify(err));
    }
  }

})();