(function () {
    'use strict';

    angular
        .module('app.poker')
        .controller('PokerController', PokerController);

    function PokerController() {
        var vm = this;
        vm.cards = ['0', '&frac12;', '1', '2', '3', '5', '8', '13', '20', '40', '100', '&infin;', '?', '[_]D'];
        reset();

        vm.selectCard = selectCard;
        vm.reveal = reveal;
        vm.reset = reset;

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
    }
})();