(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .directive('stopPropagation', stopPropagation);

  function stopPropagation() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        element.bind('click', e => e.stopPropagation());
      }
    };
  }

})();
