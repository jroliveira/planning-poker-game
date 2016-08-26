(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .value('version', '2.0')
    .directive('appVersion', appVersion);

  appVersion.$inject = ['version'];

  function appVersion(version) {
    return function(scope, element, attr) {
      element.text(version);
    };
  }

})();
