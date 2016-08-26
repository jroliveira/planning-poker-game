(function() {
  'use strict';

  class MessageController {
    get type() {
      return this._message.type;
    }

    get text() {
      return this._message.text;
    }

    constructor(message) {
      this._message = message;
    }
  }

  angular
    .module('planningPoker.message')
    .component('message', {
      controller: MessageController,
      templateUrl: '/src/app/blocks/message/message.html',
    });

  MessageController.$inject = ['message'];

})();
