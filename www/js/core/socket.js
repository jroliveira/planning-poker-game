(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('socket', socket);

    socket.$inject = ['socketFactory'];

    function socket(socketFactory) {
        var server = io.connect('https://scrum-poker-api.herokuapp.com');

        var services = socketFactory({
            ioSocket: server
        });

        return services;
    }
})();