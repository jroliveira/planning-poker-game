(function() {
  'use strict';

  angular
    .module('planningPoker.core')
    .factory('Player', PlayerFactory);

  PlayerFactory.$inject = ['Card'];

  function PlayerFactory(Card) {
    class Player {
      constructor(id, name, room) {
        this.id = id;
        this.name = name;
        this.card = null;
        this.room = room;
      }

      clearCard() {
        this.card = null;
      }

      choose(points) {
        this.card = new Card(points);
      }

      reveal() {
        this.card.show();
      }
    }

    return Player;
  }

})();
