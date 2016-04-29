(function () {
  'use strict';

  var config = {
    appErrorPrefix: '[Error] ',
    appTitle: 'planning-poker'
  };

  angular
    .module('app.core')
    .value('config', config)
    .config(handlerError);

  handlerError.$inject = ['$logProvider', 'exceptionHandlerProvider'];

  /* @ngInject */
  function handlerError($logProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }

    exceptionHandlerProvider.configure(config.appErrorPrefix);
  }

})();
