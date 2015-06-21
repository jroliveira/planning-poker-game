(function () {
    'use strict';

    angular
        .module('app.login')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'js/login/login.html',
                controller: 'LoginController as vm'
            });
    }
})();