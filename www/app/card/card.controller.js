(function () {
  'use strict';

  angular
    .module('app.card')
    .controller('CardController', CardController);

  CardController.$inject = ['$scope', '$rootScope', '$stateParams', 'socket', 'users', 'vibration', 'touch'];

  /* @ngInject */
  function CardController($scope, $rootScope, $stateParams, socket, users, vibration, touch) {
    var vm = this;
    vm.users = users;
    vm.selected = $stateParams.card;
    vm.onTap = onTap;
    
    vm.users.clearCards();

    $rootScope.$on('user:shake', onShake);

    socket.then(socketLoaded);

    var _client;

    function socketLoaded(client) {
      _client = client;

      if (vm.users.any()) {
        _client.on('card revealed', vm.users.revealCard);
      }
    }

    function onShake() {
      if (!vm.selected || vm.revealed) {
        return;
      }

      vibration.vibrate();
      $scope.$apply(reveal);
    }

    function onTap() {
      if (!touch.isEnable()) {
        return;
      }

      reveal();
    }

    function reveal() {
      vm.revealed = true;

      if (vm.users.any() && _client) {
        _client.emit('card reveal', vm.selected);
      }
    }
  }

})();