(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('vibration', vibration);

  vibration.$inject = ['navigator', 'logger'];

  /* @ngInject */
  function vibration(navigator, logger) {
    if (!navigator || !navigator.vibrate) {
      logger.error('Can not load plugin vibrate');
      return null;
    }

    return {
      vibrate: vibrate
    }

    function vibrate(milliseconds) {
      navigator.vibrate(milliseconds);
    }
  }

})();