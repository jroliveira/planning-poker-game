(function() {
  'use strict';

  angular
    .module('blocks.exception')
    .factory('exception', exception);

  exception.$inject = ['$q', 'logger'];

  function exception($q, logger) {
    return {
      catcher: catcher,
    };

    function catcher(message) {
      return func;

      function func(err) {
        let thrownDescription;
        let newMessage;

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
