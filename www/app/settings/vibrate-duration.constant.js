(function () {
  'use strict';

  angular
    .module('app.settings')
    .constant('vibrateDuration', {
      defaults: {
        id: '1',
        name: '1 sec.'
      },
      options: [
        {
          id: '1',
          name: '1 sec.'
        },
        {
          id: '2',
          name: '2 sec.'
        },
        {
          id: '3',
          name: '3 sec.'
        }
      ]
    });

})();