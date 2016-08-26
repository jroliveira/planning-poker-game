(function() {
  'use strict';

  class Card {
    constructor(points) {
      this.points = points;
      this.shown = false;
    }

    show() {
      this.shown = true;
    }
  }

  angular
    .module('planningPoker.core')
    .factory('Card', () => Card);

})();
