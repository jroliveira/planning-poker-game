(function() {
  'use strict';

  angular
    .module('app.poker')
    .controller('PokerController', PokerController);

  PokerController.$inject = ['$scope', 'session', 'cards'];

  /* @ngInject */
  function PokerController($scope, session, cards) {
    var vm = this;
    vm.cards = cards.fibonacci;
    vm.session = session;

    $scope.$on('socket:connect', session.load);
  }
})();
