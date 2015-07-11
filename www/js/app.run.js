(function () {
    'use strict';

    angular
        .module('app')
        .run(appRun)
        .config(config);

    appRun.$inject = ['$ionicPlatform'];

    function appRun($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

    config.$inject = ['$urlRouterProvider', '$locationProvider'];

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/poker/false');
    }

})();