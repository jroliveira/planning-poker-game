(function () {
  'use strict';

  angular
    .module('blocks.exception')
    .config(config);

  config.$inject = ['$provide'];

  /* @ngInject */
  function config($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
  }

  extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];

  /* @ngInject */
  function extendExceptionHandler($delegate, exceptionHandler, logger) {
    return func;


    function func(exception, cause) {
      var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
      var errorData = {
        exception: exception,
        cause: cause
      };

      exception.message = appErrorPrefix + exception.message;
      $delegate(exception, cause);

      logger.error(exception.message, errorData);
    }
  }
  
})();