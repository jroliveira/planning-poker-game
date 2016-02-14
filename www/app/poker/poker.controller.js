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
      $scope.$apply(connectedChanged);
      socket.then(socketLoaded);
    }

    function connectedChanged() {
      vm.connected = true;
    }

    function socketLoaded(client) {
      client.on('joined', onJoined);
      client.on('user:joined', vm.users.add);
      client.on('user:left', vm.users.remove);
    }

    function onJoined(data) {
      vm.joined = true;

      vm.users.reset();

      angular.forEach(data.users, vm.users.add);
    }
  }

})();
