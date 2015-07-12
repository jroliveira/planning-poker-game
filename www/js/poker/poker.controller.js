(function () {
    'use strict';

    angular
        .module('app.poker')
        .controller('PokerController', PokerController);

    PokerController.$inject = ['socket', '$location'];

    function PokerController(socket, $location) {
        var vm = this;
        vm.cards = ['0', '&frac12;', '1', '2', '3', '5', '8', '13', '20', '40', '100', '&infin;', '?', '[_]D'];
        vm.users = {};
        vm.joined = false;
        vm.selectCard = selectCard;
        vm.reveal = reveal;
        vm.reset = reset;
        vm.login = login;

        reset();

        socket.on('joined', onJoined);
        socket.on('user joined', onUserJoined);
        socket.on('user left', onUserLeft);
        socket.on('card revealed', onCardRevealed);

        function reset() {
            vm.revealed = false;
            vm.selected = null;

            angular.forEach(vm.users, function (user) {
                user.card = null;
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

        function onJoined(users) {
            vm.joined = true;

            angular.forEach(users, function (user) {
                addUser(user);
            });
        }

        function onUserJoined(user) {
            addUser(user);
        }

        function addUser(user) {
            vm.users[user.id] = {
                user: user.name,
                card: null,
            };
        }

        function onUserLeft(user) {
            delete vm.users[user.id];
        }

        function onCardRevealed(card) {
            vm.users[card.userId].card = card.points;
        }
    }
})();