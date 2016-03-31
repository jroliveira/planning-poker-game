(function() {
  'use strict';

  angular
    .module('blocks.exception')
    .config(config);

  config.$inject = ['$provide'];

  /* @ngInject */
  function config($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
  }

  extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger', 'stacktrace'];

  /* @ngInject */
  function extendExceptionHandler($delegate, exceptionHandler, logger, stacktrace) {
    return func;

    function func(exception, cause) {
      var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';

      exception.message = appErrorPrefix + exception.message;

      $delegate(exception, cause);

      stacktrace
        .fromError(exception)
        .then(callback);

      function callback(stackframes) {
        var stack = stackframes.map(map).join('\n');

        function map(sf) {
          return sf.toString();
        }

        logger.error(exception.message, stack);
      }
    }
  }

})();
