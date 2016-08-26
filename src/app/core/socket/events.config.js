(function() {
  'use strict';

  class EventsConfig {
    constructor(
      onCardChosen,
      onCardCleared,
      onCardRevealed,
      onDataUpdated,
      onPlayerDisconnect,
      onPlayerJoined,
      onPlayerReconnect
    ) {
      this.onCardChosen = onCardChosen;
      this.onCardCleared = onCardCleared;
      this.onCardRevealed = onCardRevealed;
      this.onDataUpdated = onDataUpdated;
      this.onPlayerDisconnect = onPlayerDisconnect;
      this.onPlayerJoined = onPlayerJoined;
      this.onPlayerReconnect = onPlayerReconnect;
    }

    setup(client) {
      client.on('joined', this.onPlayerJoined);
      client.on('chosen', this.onCardChosen);
      client.on('revealed', this.onCardRevealed);
      client.on('cleared', this.onCardCleared);
      client.on('user:joined', this.onDataUpdated);
      client.on('user:left', this.onDataUpdated);
      client.on('card:chosen', this.onDataUpdated);
      client.on('card:revealed', this.onDataUpdated);
      client.on('card:cleared', this.onDataUpdated);
      client.on('reconnect', this.onPlayerReconnect);
      client.on('reconnecting', this.onPlayerDisconnect('reconnecting...', 'warning'));
      client.on('reconnect_failed', this.onPlayerDisconnect('falha, reconectar', 'error'));
    }
  }

  angular
    .module('planningPoker.core')
    .factory('eventsConfig', EventsConfig);

  EventsConfig.$inject = [
    'onCardChosen',
    'onCardCleared',
    'onCardRevealed',
    'onDataUpdated',
    'onPlayerDisconnect',
    'onPlayerJoined',
    'onPlayerReconnect',
  ];

})();
