(function() {
  'use strict';

  angular
    .module('blocks.exception')
    .factory('stacktrace', stacktrace);

  function stacktrace() {
    return StackTrace;
  }

})();
