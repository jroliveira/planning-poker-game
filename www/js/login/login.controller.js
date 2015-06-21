(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$ionicPopup', '$scope', '$location'];

    function LoginController($ionicPopup, $scope, $location) {
        var vm = this;
        vm.onInit = onInit;

        function onInit() {
            $scope.data = {};

            var popup = $ionicPopup.show({
                templateUrl: 'js/login/form.html',
                title: 'Enter data',
                scope: $scope,
                buttons: [{
                    text: 'Cancel',
                    type: 'button-assertive',
                    onTap: backPoker
                }, {
                    text: '<b>Send</b>',
                    type: 'button-balanced',
                    onTap: onSend
                }]
            });

            popup.then(validate);

            function validate(res) {
                if (res) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Information',
                        template: 'Logged in successfully'
                    });

                    alertPopup.then(backPoker);
                } else {
                    backPoker();
                }
            }

            function onSend() {
                return $scope.data;
            }

            function backPoker() {
                $location.url('/poker');
            }
        }
    }
})();