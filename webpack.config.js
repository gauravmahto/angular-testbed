const buildTarget = process.env.NODE_ENV || 'development';

let webpackFile;
switch (buildTarget) {

  case 'production':
    webpackFile = require('./config/webpack.prod.js');
    break;

  case 'test':
    webpackFile = require('./config/webpack.test.js');
    break;

  case 'development':
  default:
    webpackFile = require('./config/webpack.dev.js');

}

module.exports = webpackFile;