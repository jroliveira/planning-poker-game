(function() {
  'use strict';

  class socket {
    get connected() {
      return !!this._client;
    }

    constructor() {
      this._client = null;
    }

    createWith(client) {
      this._client = client;
    }

    emit(eventName, data) {
      if (!this._client) {
        return;
      }

      if (data) {
        this._client.emit(eventName, data);
      } else {
        this._client.emit(eventName);
      }
    }
  }

  angular
    .module('planningPoker.core')
    .factory('socket', socket);

})();
