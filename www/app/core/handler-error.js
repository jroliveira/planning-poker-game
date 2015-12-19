(function () {
  'use strict';

  var config = {
    appErrorPrefix: '[helloWorld Error] ',
    appTitle: 'helloWorld'
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

    var routerConfig = {
      docTitle: config.appTitle + ': '
    };

    exceptionHandlerProvider.configure(config.appErrorPrefix);    
  }

})();