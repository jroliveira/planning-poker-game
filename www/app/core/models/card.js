(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('Card', CardFactory);

  function CardFactory() {
    function Card(points) {
      this.points = points;
      this.shown = false;
    }

    Card.prototype.show = function() {
      this.shown = true;
    };

    return Card;
  }
})();
