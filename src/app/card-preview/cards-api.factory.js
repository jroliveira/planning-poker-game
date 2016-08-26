(function() {
  'use strict';

  class CardsApi {
    constructor(socket) {
      this._socket = socket;
    }

    chooseCard(points) {
      this._socket.emit('card:chosen', points);
    }

    revealCard(points) {
      this._socket.emit('card:reveal', points);
    }

    clearCard() {
      this._socket.emit('card:cleared');
    }
  }

  angular
    .module('planningPoker.cardPreview')
    .factory('cardsApi', CardsApi);

  CardsApi.$inject = ['socket'];

})();
