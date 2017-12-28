/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

module.exports = {

  resolve: {
    extensions: [
      '.ts', '.js'
    ],
    alias: {
      src: helpers.root('src'),
      app: helpers.root('src', 'app')
    }
  },

  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },

  module: {

    rules: [

      {
        test: /\.ts$/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: helpers.root('src', 'tsconfig.json')
          }
        }, {
          loader: 'angular2-template-loader'
        }]
      },

      /**
       * HTML
       */
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },

      /**
       * Images
       */
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [{
          loader: 'file-loader?name=assets/[name].[hash].[ext]'
        }]
      },

      /**
       * This pattern is for the application-wide styles. 
       * It excludes .css and .scss files within the src/app directory where the component-scoped styles sit. 
       * The ExtractTextPlugin (described below) applies the style and css loaders to these files.
       */
      {
        test: /\.(css|scss)$/,
        exclude: helpers.root('src', 'app'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }]
        })
      },

      /**
       * This pattern filters for component-scoped styles and loads them as strings 
       * via the raw-loader, which is what Angular expects to do with styles specified 
       * in a styleUrls metadata property.
       */
      {
        test: /\.(css|scss)$/,
        include: helpers.root('src', 'app'),
        use: [{
          loader: 'raw-loader'
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [
              helpers.root('src', 'scss')
            ]
          }
        }]
      }

    ]

  },

  plugins: [

    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'app', 'vendor', 'polyfills'
      ]
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })

  ]

};
