(function() {
  'use strict';

  class LoginController {
    get player() {
      return this._player;
    }

    constructor($ionicPopup, $location, usersApi) {
      this._$ionicPopup = $ionicPopup;
      this._$location = $location;
      this._usersApi = usersApi;
    }

    $onInit() {
      this._player = {};
    }

    send(player) {
      this._usersApi.join(player.room, player.name);

      const options = {
        title: 'Information',
        template: 'Logged in successfully',
      };

      this._$ionicPopup
        .alert(options)
        .then(() => this._$location.url('/'));
    }
  }

  angular
    .module('planningPoker.login')
    .component('login', {
      controller: LoginController,
      templateUrl: '/src/app/login/login.html',
    });

  LoginController.$inject = ['$ionicPopup', '$location', 'usersApi'];

})();
