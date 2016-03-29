(function() {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('marinete', MarineteProvider);

  function MarineteProvider() {
    var provider = new MarineteRestfulProvider({
      rootUrl: 'https://marinet-api.herokuapp.com',
      app: {
        id: '56f9ce51c3d78e04006b8cd1',
        key: 'eab36227581e5bb7791d142b9b75badd796bbd40b3ce0ebc9ec3e4eb47171f8d'
      }
    });

    return provider;
  }

  /**
   * `MarineteRestfulProvider` constructor.
   *
   * @param {Object} config
   * @api public
   */
  function MarineteRestfulProvider(config) {
    this.config = config || {
      rootUrl: '',
      app: {
        id: '',
        key: ''
      }
    };
  }

  /**
   * Logs the error
   *
   * @param {Object} error
   * @param {Function} callback
   * @api public
   */
  MarineteRestfulProvider.prototype.error = function(error, callback) {
    if (!this.config.rootUrl) {
      throw new Error('There is no rootUrl in the config.');
    }
    if (!this.config.app) {
      throw new Error('There is no app in the config.');
    }
    if (!this.config.app.id) {
      throw new Error('Can\'t find app.id property.');
    }
    if (!this.config.app.key) {
      throw new Error('Can\'t find app.key property.');
    }

    var uri = this.config.rootUrl + '/error';

    var options = {
      url: uri,
      method: 'POST',
      headers: {
        'marinetappid': this.config.app.id,
        'marinetappkey': this.config.app.key,
        'Content-Type': 'application/json'
      },
      json: error
    };

    request(options, callback);
  };

  /**
   * Send request.
   *
   * @param {Object} options
   * @param {Function} callback
   * @api private
   */
  function request(options, callback) {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
      if (http.readyState === 4) {
        if (callback) {
          callback(http.responseText);
        }
      }
    };

    http.open(options.method, options.url, true);

    for (var header in options.headers) {
      http.setRequestHeader(header, options.headers[header]);
    }

    http.send(options.json);
  }

})();
