(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('User', UserFactory);

  UserFactory.$inject = ['Card'];

  /* @ngInject */
  function UserFactory(Card) {
    function User(id, name, room) {
      this.id = id;
      this.name = name;
      this.card = null;
      this.room = room;
    }

    User.prototype.clearCard = function() {
      this.card = null;
    };

    User.prototype.choose = function(points) {
      this.card = new Card(points);
    };

    User.prototype.reveal = function() {
      this.card.show();
    };

    return User;
  }
})();
