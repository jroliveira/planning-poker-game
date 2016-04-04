(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$ionicPopup', '$location', 'session'];

  /* @ngInject */
  function LoginController($ionicPopup, $location, session) {
    var vm = this;
    vm.user = {};
    vm.send = send;

    function send(user) {
      session.join(user.room, user.name);

      var options = {
        title: 'Information',
        template: 'Logged in successfully'
      };

      var alertPopup = $ionicPopup.alert(options);

      alertPopup.then(join);
    }

    function join() {
      $location.url('/poker');
    }
  }

})();
