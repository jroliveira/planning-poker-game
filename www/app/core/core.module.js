(function () {
  'use strict';

  angular
    .module('app.core', [
      'ionic',
      'btford.socket-io',
      'blocks.exception',
      'blocks.logger'
    ]);

})();