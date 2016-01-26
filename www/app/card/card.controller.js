(function () {
  'use strict';

  angular
    .module('app.card')
    .controller('CardController', CardController);

  CardController.$inject = ['$scope', '$rootScope', '$stateParams', 'socket', 'users'];

  /* @ngInject */
  function CardController($scope, $rootScope, $stateParams, socket, users) {
    var vm = this;
    vm.users = users;
    vm.selected = $stateParams.card;
    vm.reveal = reveal;

    $rootScope.$on('user:shake', onShake);

    socket.then(socketLoaded);

    var _client;
    function socketLoaded(client) {
      _client = client;

      if (vm.users.any()) {
        _client.on('card revealed', vm.users.update);
      }
    }

    function reveal(card) {
      if ($scope.$$phase) {
        revealedChanged();
      } else {
        $scope.$apply(revealedChanged);
      }

      if (vm.users.any() && _client) {
        _client.emit('card reveal', card);
      }
    }

    function revealedChanged() {
      vm.revealed = true;
    }

    function onShake() {
      if (vm.selected && !vm.revealed) {
        vm.reveal(vm.selected);

        if (navigator && navigator.vibrate) {
          navigator.vibrate(1000);
        }
      }
    }
  }

})();
