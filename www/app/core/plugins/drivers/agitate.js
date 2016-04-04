(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('agitate', agitate);

  agitate.$inject = ['$rootScope', 'logger'];

  /* @ngInject */
  function agitate($rootScope, logger) {
    return {
      activate: activate,
      deactivate: deactivate
    };

    function activate(sensitivity) {
      if (!window.shake || !window.shake.startWatch) {
        return;
      }

      window.shake.startWatch(onShake, sensitivity, onError);
    }

    function onShake() {
      $rootScope.$emit('user:shake');
    }

    function deactivate() {
      if (!window.shake || !window.shake.stopWatch) {
        return;
      }

      window.shake.stopWatch();
    }

    function onError(err) {
      logger.error('Shake on error: ' + JSON.stringify(err));
    }
  }

})();