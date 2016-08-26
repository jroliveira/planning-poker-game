(function() {
  'use strict';

  const config = {
    appErrorPrefix: '[Error] ',
    appTitle: 'planning-poker',
  };

  angular
    .module('planningPoker.core')
    .value('config', config)
    .config(handlerError);

  handlerError.$inject = ['$logProvider', 'exceptionHandlerProvider'];

  function handlerError($logProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }

    exceptionHandlerProvider.configure(config.appErrorPrefix);
  }

})();
