(function () {
    'use strict';

    angular
        .module('app.poker')
        .controller('PokerController', PokerController);

    PokerController.$inject = ['$location'];

    function PokerController($location) {
        var vm = this;
        vm.cards = ['0', '&frac12;', '1', '2', '3', '5', '8', '13', '20', '40', '100', '&infin;', '?', '[_]D'];
        vm.cardsRevealed = [];

        vm.selectCard = selectCard;
        vm.reveal = reveal;
        vm.reset = reset;
        vm.login = login;

        reset();

        function reveal() {
            vm.revealed = true;
        }

        function selectCard(card) {
            vm.selected = card;
        }

        function reset() {
            vm.revealed = false;
            vm.selected = null;
        }

        function login() {
            //$location.url('/login');

            var cardNumber = Math.floor((Math.random() * 10) + 1);

            var card = {
                user: 'jr',
                card: cardNumber,
                border: cardNumber == vm.selected ? 'border-green' : 'border-red'
            };

            vm.cardsRevealed.push(card);
        }
    }
})();