(function() {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  logger.$inject = ['$injector'];

  /* @ngInject */
  function logger($injector) {
    var $http = angular.injector(['ng']).get('$http');
    if (!$http) {
      return;
    }

    return {
      error: error
    };

    function error(message, stack, title) {
      var error = {
        message: message,
        exception: stack
      };

      $http.post('https://scrum-poker-api.herokuapp.com/errors', error);
    }
  }

})();
