(function () {
  'use strict';

  angular
    .module('app.core')
    .constant('cordova', typeof window.cordova !== 'undefined' ? window.cordova : {})
    .constant('StatusBar', typeof window.StatusBar !== 'undefined' ? window.StatusBar : {});

})();