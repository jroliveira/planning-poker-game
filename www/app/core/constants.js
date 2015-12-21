(function () {
  'use strict';

  angular
    .module('app.core')
    .constant('io', typeof io !== 'undefined' ? io : {})
    .constant('cordova', typeof window.cordova !== 'undefined' ? window.cordova : {})
    .constant('shake', typeof window.shake !== 'undefined' ? window.shake : {})
    .constant('insomnia', typeof window.plugins.insomnia !== 'undefined' ? window.plugins.insomnia : {})
    .constant('StatusBar', typeof window.StatusBar !== 'undefined' ? window.StatusBar : {});

})();