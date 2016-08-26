(function() {
  'use strict';

  class Message {
    get text() {
      return this._text;
    }

    get type() {
      return this._type;
    }

    constructor() {
      this._text = 'connecting...';
      this._type = 'warning';
    }

    send(text, type) {
      this._text = text;
      this._type = type;
    }

    clear() {
      this._text = null;
      this._type = null;
    }
  }

  angular
    .module('planningPoker.message')
    .factory('message', Message);

})();
