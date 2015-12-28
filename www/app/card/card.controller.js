(function () {
  'use strict';

  angular
    .module('app.card')
    .controller('CardController', CardController);

  CardController.$inject = ['$scope', '$rootScope', '$location', '$stateParams', 'socket', 'users'];

  /* @ngInject */
  function CardController($scope, $rootScope, $location, $stateParams, socket, users) {
    var vm = this;
    vm.users = users;
    vm.selected = $stateParams.card;
    vm.reveal = reveal;
    vm.back = back;

    $rootScope.$on('user:shake', onShake);

    if (vm.users.any()) {
      socket.on('card revealed', vm.users.update);
    }

    function back() {
      vm.revealed = false;
      vm.users.cleanCards();

      $location.url('/poker');
    }

    function reveal(card) {
      if ($scope.$$phase) {
        revealedChanged();
      } else {
        $scope.$apply(revealedChanged);
      }

      if (vm.users.any()) {
        socket.emit('card reveal', card);
      }
    }

    function revealedChanged() {
      vm.revealed = true;
    }

    function onShake() {
      if (vm.selected && !vm.revealed) {
        vm.reveal(vm.selected);
      }
    }
  }

})();