(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('stir', stir);

  stir.$inject = ['$rootScope', 'shake', 'logger'];

  /* @ngInject */
  function stir($rootScope, shake, logger) {
    if (!shake || !shake.startWatch || !shake.stopWatch) {
      logger.error('Can not load plugin shake');
      return null;
    }

    return {
      activate: activate,
      deactivate: deactivate
    }

    function activate(sensitivity) {
      shake.startWatch(onShake, sensitivity, onError);
    }

    function onShake() {
      $rootScope.$emit('user:shake');
    }

    function onError(err) {
      logger.error('Shake on error: ' + JSON.stringify(err));
    }

    function deactivate() {
      shake.stopWatch();
    }
  }

})();