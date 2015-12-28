(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('User', UserFactory);

  function UserFactory() {
    return User;

    function User(name, card) {
      this.name = name;
      this.card = card;
    }
  }

})();