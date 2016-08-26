(function() {
  'use strict';

  class Room {
    get name() {
      return this._name;
    }

    constructor(name) {
      this._name = name;
    }
  }

  angular
    .module('planningPoker.core')
    .factory('Room', () => Room);

})();
