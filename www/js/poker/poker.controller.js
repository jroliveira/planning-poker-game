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
        vm.userJoined = false;
        vm.selectCard = selectCard;
        vm.reveal = reveal;
        vm.reset = reset;
        vm.login = login;

        reset();

        socket.on('card revealed', onCardRevealed);
        socket.on('user joined', onUserJoined);
        socket.on('joined', onJoined);

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

        function onCardRevealed(card) {
            vm.users[card.userId].card = card.points;
        }

        function onUserJoined(user) {
            addUser(user.id, user.name);
        }

        function onJoined(users) {
            vm.userJoined = true;

            angular.forEach(users, function (name, id) {
                addUser(id, name);
            });
        }

        function addUser(id, name) {
            vm.users[id] = {
                user: name,
                card: null,
            };
        }
    }
})();