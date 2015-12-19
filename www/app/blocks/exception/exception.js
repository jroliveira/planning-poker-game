(function () {
  'use strict';

  angular
    .module('blocks.exception')
    .factory('exception', exception);

  /* @ngInject */
  function exception($q, logger) {
    return {
      catcher: catcher
    };

    function catcher(message) {
      return func;

      function func(err) {
        var thrownDescription;
        var newMessage;

        if (err.data && err.data.description) {
          thrownDescription = '\n' + err.data.description;
          newMessage = message + thrownDescription;
        }

        err.data.description = newMessage;
        logger.error(newMessage);

        return $q.reject(err);
      }
    }
  }
  
})();