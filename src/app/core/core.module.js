(function() {
  'use strict';

  angular
    .module('planningPoker.core', [
      'angularLoad',
      'blocks.exception',
      'blocks.logger',
      'btford.socket-io',
    ]);

})();
