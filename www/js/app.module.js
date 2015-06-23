(function () {
    'use strict';

    angular
        .module('app', [
            'ionic',
            'ionic-material',
            'btford.socket-io',
            'app.core',
            'app.poker',
            'app.login'
        ]);

})();