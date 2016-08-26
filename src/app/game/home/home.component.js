(function() {
  'use strict';

  class HomeController {
    get cards() {
      return this._cardsStorage.fibonacci;
    }

    get players() {
      return this._session.players;
    }

    get logged() {
      return this._session.logged;
    }

    get connected() {
      return this._socket.connected;
    }

    constructor(socket, session, cardsStorage) {
      this._socket = socket;
      this._session = session;
      this._cardsStorage = cardsStorage;
    }
  }

  angular
    .module('planningPoker.home')
    .component('home', {
      controller: HomeController,
      templateUrl: '/src/app/game/home/home.html',
    });

  HomeController.$inject = ['socket', 'session', 'cardsStorage'];

})();
