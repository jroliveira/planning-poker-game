(function () {
    'use strict';

    angular
        .module('app.poker')
        .controller('PokerController', PokerController);

    PokerController.$inject = ['socket', '$location', '$stateParams'];

    function PokerController(socket, $location, $stateParams) {
        var vm = this;
        vm.cards = ['0', '&frac12;', '1', '2', '3', '5', '8', '13', '20', '40', '100', '&infin;', '?', '[_]D'];
        vm.users = {};
        vm.userJoined = $stateParams.joined === 'true';
        vm.selectCard = selectCard;
        vm.reveal = reveal;
        vm.reset = reset;
        vm.login = login;

        reset();

        socket.on('card revealed', onCardRevealed);
        socket.on('user joined', onUserJoined);

        function reset() {
            vm.revealed = false;
            vm.selected = null;

            angular.forEach(vm.users, function (user) {
                user.card = null;
                user.border = null;
            });
        }

        function selectCard(card) {
            vm.selected = card;
        }

        function reveal(card) {
            vm.revealed = true;
            socket.emit('card reveal', card);
        }

        function login() {
            $location.url('/login');
        }

        function onCardRevealed(card) {
            vm.users[card.userId].card = card.points;
            vm.users[card.userId].border = card.points == vm.selected ? 'border-green' : 'border-red';
        }

        function onUserJoined(user) {
            vm.userJoined = true;

            vm.users[user.id] = {
                user: user.user,
                card: null,
                border: null
            };
        }
    }
})();