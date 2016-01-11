(function () {
  'use strict';

  angular
    .module('app.settings')
    .constant('shakeSensitivity', {
      defaults: 20,
      min: 18,
      max: 38
    });

})();