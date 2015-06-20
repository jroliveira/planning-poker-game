(function () {
    'use strict';

    angular
        .module('app.poker')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('poker', {
                url: '/poker',
                templateUrl: 'js/poker/poker.html',
                controller: 'PokerController as vm'
            });

        $urlRouterProvider.otherwise('/poker');
    }
})();