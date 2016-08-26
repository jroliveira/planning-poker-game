'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha',
      'sinon-chai',
    ],
    files: [
      './bower_components/angular/angular.js',
      './bower_components/angular-animate/angular-animate.js',
      './bower_components/angular-load/angular-load.js',
      './bower_components/angular-mocks/angular-mocks.js',
      './bower_components/angular-sanitize/angular-sanitize.js',
      './bower_components/angular-socket-io/socket.js',
      './bower_components/angular-ui-router/release/angular-ui-router.js',
      './bower_components/ionic/js/ionic.js',
      './bower_components/ionic/js/ionic-angular.js',
      './bower_components/ionic-material/dist/ionic.material.js',
      './bower_components/stacktrace-js/stacktrace.js',
      './src/app/app.module.js',
      './src/app/**/*.module.js',
      './src/app/**/*.js',
      './src/app/**/*.spec.coffee',
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.js': [
        'coverage',
      ],
      'src/**/*.coffee': [
        'coffee',
      ],
    },
    coffeePreprocessor: {
      options: {
        bare: true,
        sourceMap: false
      },
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js');
      },
    },
    coverageReporter: {
      type: 'text-summary',
      dir: 'coverage/',
    },
    reporters: [
      'nyan',
      'coverage',
    ],
    nyanReporter: {
      suppressErrorReport: false,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'Chrome',
    ],
    singleRun: false,
  });
};
