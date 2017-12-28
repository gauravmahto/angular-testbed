/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

import 'core-js/es6';
import 'core-js/es7/reflect';

// Load zone.js early within polyfills.ts, immediately after the other ES6 and metadata shims.
require('zone.js/dist/zone'); // tslint:disable-line

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error.stackTraceLimit = Infinity;
  require('zone.js/dist/long-stack-trace-zone');  // tslint:disable-line
}
