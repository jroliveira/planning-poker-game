(function () {
  'use strict';

  angular
    .module('app.core')
    .value('version', '2.0')
    .directive('appVersion', appVersion);

  appVersion.$inject = ['version'];

  /* @ngInject */
  function appVersion(version) {
    return function (scope, element, attr) {
      element.text(version);
    };
  }

})();
