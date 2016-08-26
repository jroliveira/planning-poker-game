(function() {
  'use strict';

  class ExceptionHandlerProvider {
    constructor() {
      this.config = {
        appErrorPrefix: undefined,
      };
    }

    configure(appErrorPrefix) {
      this.config.appErrorPrefix = appErrorPrefix;
    }

    $get() {
      return {
        config: this.config,
      };
    }
  }

  angular
    .module('blocks.exception')
    .provider('exceptionHandler', ExceptionHandlerProvider);

})();
