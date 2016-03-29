(function() {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  logger.$inject = ['marinete'];

  /* @ngInject */
  function logger(marinete) {
    return {
      error: error
    };

    function error(message, data, title) {
      data = data || {
        exception: {
          message: message
        }
      };

      marinete.error({
        message: message,
        exception: data.exception
      });
    }
  }

})();
