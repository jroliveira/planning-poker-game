(function() {
  'use strict';

  class CardPreviewController {
    get card() {
      return this._card;
    }

    get players() {
      return this._session.players;
    }

    get revealed() {
      return this._revealed;
    }

    constructor(
      $scope,
      $rootScope,
      $stateParams,
      $location,
      session,
      cardsApi,
      vibration,
      touch
    ) {
      this._$scope = $scope;
      this._$rootScope = $rootScope;
      this._$stateParams = $stateParams;
      this._$location = $location;
      this._session = session;
      this._cardsApi = cardsApi;
      this._vibration = vibration;
      this._touch = touch;
    }

    $onInit() {
      this._$rootScope.$on('player:shake', () => this._onShake());
      this._card = this._$stateParams.card;
      this._revealed = false;
      this._cardsApi.chooseCard(this._card);
    }

    _onShake() {
      if (!this._card || this._revealed) {
        return;
      }

      this._vibration.vibrate();
      this._$scope.$apply(this._revealCard);
    }

    reveal() {
      if (!this._touch.isEnable()) {
        return;
      }

      this._revealCard();
    }

    _revealCard() {
      this._revealed = true;
      this._cardsApi.revealCard(this._selected);
    }

    clearCard() {
      this._cardsApi.clearCard();
      this._$location.url('/');
    }
  }

  angular
    .module('planningPoker.cardPreview')
    .component('cardPreview', {
      controller: CardPreviewController,
      templateUrl: '/src/app/card-preview/card-preview.html',
    });

  CardPreviewController.$inject = [
    '$scope',
    '$rootScope',
    '$stateParams',
    '$location',
    'session',
    'cardsApi',
    'vibration',
    'touch',
  ];

})();
