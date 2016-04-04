(function () {
  'use strict';

  angular
    .module('app.core')
    .directive('card', card);

  function card() {
    return {
      restrict: 'C',
      link: function (scope, element, attr) {
        element.bind('click', function (e) {
          e.stopPropagation();
        });
      }
    };
  }

})();
