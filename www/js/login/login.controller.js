(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['socket', '$ionicPopup', '$location'];

    function LoginController(socket, $ionicPopup, $location) {
        var vm = this;
        vm.channel = {
            user: '',
            channel: ''
        };
        vm.send = send;
        vm.cancel = cancel;

        function send() {
            socket.emit('join', vm.channel);

            var alertPopup = $ionicPopup.alert({
                title: 'Information',
                template: 'Logged in successfully'
            });

            alertPopup.then(join);
        }

        function join() {
            $location.url('/poker/true');
        }

        function cancel() {
            $location.url('/poker/false');
        }
    }
})();