(function () {
  'use strict';

  angular
    .module('app.core')
    .constant('io', typeof io !== 'undefined' ? io : {});

})();