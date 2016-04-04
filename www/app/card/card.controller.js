(function() {
  'use strict';

  angular
    .module('app.card')
    .controller('CardController', CardController);

  CardController.$inject = ['$scope', '$rootScope', '$stateParams', '$location', 'session', 'vibration', 'touch'];

  /* @ngInject */
  function CardController($scope, $rootScope, $stateParams, $location, session, vibration, touch) {
    var vm = this;
    vm.card = $stateParams.card;
    vm.session = session;
    vm.reveal = reveal;
    vm.clearCard = clearCard;

    session.chooseCard(vm.card);

    $rootScope.$on('user:shake', onShake);

    function onShake() {
      if (!vm.selected || vm.revealed) {
        return;
      }

      vibration.vibrate();
      $scope.$apply(revealCard);
    }

    function reveal() {
      if (!touch.isEnable()) {
        return;
      }

      revealCard();
    }

    function revealCard() {
      vm.revealed = true;
      session.revealCard(vm.selected);
    }

    function clearCard() {
      session.clearCard();
      $location.url('/poker');
    }
  }
})();
