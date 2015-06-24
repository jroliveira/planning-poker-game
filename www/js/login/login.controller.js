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
        vm.back = back;

        function send() {
            socket.emit('join', vm.channel);

            var alertPopup = $ionicPopup.alert({
                title: 'Information',
                template: 'Logged in successfully'
            });

            alertPopup.then(back);
        }

        function back() {
            $location.url('/poker');
        }
    }
})();