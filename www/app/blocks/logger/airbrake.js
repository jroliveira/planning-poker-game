(function () {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('airbrake', airbrake);

  function airbrake() {
    var options = {
      projectId: 118731,
      projectKey: '362cee751311606a0eb31e91ca5da63b'
    };

    return new airbrakeJs.Client(options);
  }

})();