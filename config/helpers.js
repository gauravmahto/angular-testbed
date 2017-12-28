/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

const path = require('path');

const root$ = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);

  return path.join.apply(path, [root$].concat(args));
}

exports.root = root;
