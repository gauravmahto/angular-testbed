/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

// Patch the node.js require base path.
// For e.g: Instead of require('./abc/xyz') we can do require('abc/xyz')
require('app-module-path')  // tslint:disable-line
  .addPath(__dirname + '/');

// Global constants.
global.WEB_ROOT_DIR = __dirname;

const log = console;

// Global promise unhandledRejection handler.
process.on('unhandledRejection', (error: any) => {

  // Will print "unhandledRejection err is not defined"
  log.error('unhandledRejection', error.message, error.stack);

});
