(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .factory('onDataUpdated', onDataUpdated);

  onDataUpdated.$inject = ['session'];

  function onDataUpdated(session) {
    return function(data) {
      if (!session.logged) {
        return;
      }

      session.clearPlayers();

      angular.forEach(data.users, function(player) {
        if (player.id !== session.player.id) {
          session.addPlayer(player.id, player.name);

          if (player.card) {
            session.chooseCard(player.card.points, player.id);
          }
        }
      });
    };
  }

})();
