(function () {
  'use strict';

  angular
    .module('app.poker')
    .controller('PokerController', PokerController);

  PokerController.$inject = ['$scope', '$rootScope', '$location', 'socket'];

  /* @ngInject */
  function PokerController($scope, $rootScope, $location, socket) {
    var vm = this;
    vm.cards = ['0', '1', '2', '3', '5', '8', '13', '20', '40', '&infin;', '?'];
    vm.users = {};
    vm.connected = false;
    vm.joined = false;
    vm.selectCard = selectCard;
    vm.reveal = reveal;
    vm.reset = reset;
    vm.login = login;

    $scope.$on('socket:connect', onConnected);
    $rootScope.$on('user:shake', onShake);

    reset();

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
      $scope.$apply(revealedChanged);

      function revealedChanged() {
        vm.revealed = true;
      }

      if (vm.connected) {
        socket.emit('card reveal', card);
      }
    }

    function login() {
      $location.url('/login');
    }

    function onShake() {
      if (vm.selected && !vm.revealed) {
        vm.reveal(vm.selected);
      }
    }

    function onConnected() {
      vm.connected = true;

      socket.on('joined', onJoined);
      socket.on('user joined', onUserJoined);
      socket.on('user left', onUserLeft);
      socket.on('card revealed', onCardRevealed);
    }

    function onJoined(users) {
      vm.joined = true;

      vm.users = {};

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
        card: null
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