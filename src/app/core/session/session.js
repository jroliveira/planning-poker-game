(function() {
  'use strict';

  class Session {
    get logged() {
      return !!this._room;
    }

    get room() {
      if (!this._room) {
        return null;
      }

      return this._room.name;
    }

    get player() {
      if (!this._player) {
        return null;
      }

      return {
        id: this._player.id,
        name: this._player.name,
      };
    }

    get players() {
      if (!this.logged) {
        return {};
      }

      return this._players;
    }

    constructor(message, Player, Room) {
      this._message = message;
      this._Player = Player;
      this._Room = Room;

      this._player = null;
      this.disconnect();
      this.clearPlayers();
    }

    join(playerId, playerName, room) {
      this._message.clear();
      this._room = new this._Room(room);
      this._player = new this._Player(playerId, playerName, this._room.name);
    }

    addPlayer(playerId, playerName) {
      let player = new this._Player(playerId, playerName, this._room.name);
      this._players[playerId] = player;
    }

    clearPlayers() {
      this._players = {};
    }

    chooseCard(points, playerId) {
      if (playerId) {
        this._players[playerId].choose(points);
        return;
      }

      this._player.choose(points);
    }

    revealCard() {
      this._player.reveal();
    }

    clearCard() {
      this._player.clearCard();
    }

    disconnect() {
      this._room = null;
    }
  }

  angular
    .module('planningPoker.core')
    .factory('session', Session);

  Session.$inject = ['message', 'Player', 'Room'];

})();
