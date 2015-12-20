(function () {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['socket', '$ionicPopup', '$location'];

  /* @ngInject */
  function LoginController(socket, $ionicPopup, $location) {
    var vm = this;
    vm.user = {
      name: '',
      room: ''
    };
    vm.send = send;
    vm.cancel = cancel;

    function send(user) {
      socket.emit('join', user);

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

    function cancel() {
      $location.url('/poker');
    }
  }

})();