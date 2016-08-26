(function() {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  logger.$inject = ['$injector', 'appConfig'];

  function logger($injector, appConfig) {
    let $http = angular.injector(['ng']).get('$http');
    if (!$http) {
      return;
    }

    return {
      error: error,
    };

    function error(message, stack, title) {
      let error = {
        message: message,
        exception: stack,
      };

      $http.post(`${appConfig.api.url}/errors`, error);
    }
  }

})();
