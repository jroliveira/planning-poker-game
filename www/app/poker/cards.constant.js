(function () {
  'use strict';

  angular
    .module('app.poker')
    .constant('cards', {
      fibonacci: ['0', '1', '2', '3', '5', '8', '13', '20', '40', '&infin;', '?']
    });

})();