(function () {
    'use strict';

    angular
        .module('app.poker')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('poker', {
                url: '/poker/:joined',
                templateUrl: 'js/poker/poker.html',
                controller: 'PokerController as vm'
            });
    }
})();