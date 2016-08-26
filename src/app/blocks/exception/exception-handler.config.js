(function() {
  'use strict';

  angular
    .module('blocks.exception')
    .config(config);

  config.$inject = ['$provide'];

  function config($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
  }

  extendExceptionHandler.$inject = [
    '$delegate',
    'exceptionHandler',
    'logger',
    'stacktrace',
  ];

  function extendExceptionHandler(
    $delegate,
    exceptionHandler,
    logger,
    stacktrace
  ) {
    return func;

    function func(exception, cause) {
      let appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';

      exception.message = appErrorPrefix + exception.message;

      $delegate(exception, cause);

      stacktrace
        .fromError(exception)
        .then(callback);

      function callback(stackframes) {
        let stack = stackframes.map(item => item.toString()).join('\n');
        logger.error(exception.message, stack);
      }
    }
  }

})();
