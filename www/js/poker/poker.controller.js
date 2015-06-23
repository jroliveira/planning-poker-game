(function () {
    'use strict';

    angular
        .module('app.poker')
        .controller('PokerController', PokerController);

    PokerController.$inject = ['socket', '$location'];

    function PokerController(socket, $location) {
        var vm = this;
        vm.cards = ['0', '&frac12;', '1', '2', '3', '5', '8', '13', '20', '40', '100', '&infin;', '?', '[_]D'];
        vm.cardsRevealed = [];
        vm.selectCard = selectCard;
        vm.reveal = reveal;
        vm.reset = reset;
        vm.login = login;

        reset();

        socket.on('card revealed', onRevealed);

        function reset() {
            vm.revealed = false;
            vm.selected = null;
        }

        function selectCard(card) {
            vm.selected = card;
        }

        function reveal(card) {
            vm.revealed = true;
            socket.emit('card revealed', card);
        }

        function login() {
            $location.url('/login');
        }

        function onRevealed(card) {
            card.border = card.card == vm.selected ? 'border-green' : 'border-red';
            vm.cardsRevealed.push(card);
        }
    }
})();