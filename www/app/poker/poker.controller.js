(function () {
  'use strict';

  angular
    .module('app.poker')
    .controller('PokerController', PokerController);

  PokerController.$inject = ['$scope', 'socket', 'users', 'cards'];

  /* @ngInject */
  function PokerController($scope, socket, users, cards) {
    var vm = this;
    vm.users = users;
    vm.cards = cards.fibonacci;

    $scope.$on('socket:connect', onConnected);

    function onConnected() {
      vm.connected = true;

      socket.on('joined', onJoined);
      socket.on('user joined', vm.users.add);
      socket.on('user left', vm.users.remove);
    }

    function onJoined(data) {
      vm.joined = true;

      vm.users.reset();

      angular.forEach(data, vm.users.add);
    }
  }

})();