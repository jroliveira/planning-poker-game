(function () {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  logger.$inject = ['airbrake'];

  /* @ngInject */
  function logger(airbrake) {
    return {
      error: error
    };

    function error(message, data, title) {
      var notify = {
        error: data.exception
      };

      airbrake.notify(notify);
    }
  }

})();