(function () {
  'use strict';

  angular
    .module('app', [
      'ionic',
      'ionic-material',
      'btford.socket-io',
      'angularLoad',
      'app.core',
      'app.main',
      'app.poker',
      'app.card',
      'app.login',
      'app.about',
      'app.settings'
    ]);

})();