/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

const webpackConfig = require('./webpack.test');

module.exports = (config) => {

  const config$ = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [{
      pattern: './config/karma-test-shim.js',
      watched: false
    }],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  };

  config.set(config$);

};
