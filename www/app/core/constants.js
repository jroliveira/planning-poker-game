(function () {
  'use strict';

  angular
    .module('app.core')
    .constant('io', typeof io !== 'undefined' ? io : {})
    .constant('cordova', typeof window.cordova !== 'undefined' ? window.cordova : {})
    .constant('shake', typeof window.shake !== 'undefined' ? window.shake : {})
    .constant('insomnia', (typeof window.plugins !== 'undefined') && (typeof window.plugins.insomnia !== 'undefined') ? window.plugins.insomnia : {})
    .constant('navigator', typeof navigator !== 'undefined' ? navigator : {})
    .constant('cards', ['0', '1', '2', '3', '5', '8', '13', '20', '40', '&infin;', '?']);

})();