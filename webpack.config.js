'use strict';

const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config            = require('./gulp/config.js');

const src  = path.join(__dirname, `${config.src}/assets/js`);
const dest = path.join(__dirname, `${config.dest}/assets/js`);

/**
 * Entry points
 */

const entry = {
  main : [ 'babel-polyfill', path.join(src, 'main.js') ]
};

/**
 * Module rules
 */

const moduleRules = [
  {
    test : /\.css$/,
    use  : ExtractTextPlugin.extract({
      fallback : 'style-loader',
      use      : [{
        loader  : 'css-loader',
        options : {
          minimize : config.build.minify.js
        }
      }]
    })
  }, {
    test    : /\.(png|jpe?g|gif)$/,
    include : /(node_modules)/,
    use     : [{
      loader  : 'url-loader',
      options : {
        limit : 8192,
        name  : '[name].[hash:7].[ext]'
      }
    }]
  }, {
    test : /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
    include : /(node_modules)/,
    use  : [{
      loader  : 'url-loader',
      options : {
        limit : 8192,
        name  : '[name].[hash:7].[ext]'
      }
    }]
  }, {
    test    : /\.js$/,
    exclude : /(node_modules)/,
    use     : 'babel-loader'
  }
];

/**
 * Plugins
 */

const plugins = () => {
  let plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(config.ENV)
    }),
    new webpack.ProvidePlugin({
      $         : 'jquery',
      jQuery    : 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name      : 'libs',
      minChunks : (module) => {
        if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
          return false;
        }
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new ExtractTextPlugin('libs.css')
  ];
  if (config.ENV !== 'development') {
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
  }
  if (config.build.minify.js) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap : config.build.sourcemaps.js ? true : false
    }));
  }
  return plugins;
};

/**
 * Configs
 */

module.exports = {
  entry,
  output : {
    path     : dest,
    filename : '[name].js'
  },
  resolve : {
    modules    : [ src, 'node_modules' ],
    extensions : [ '.js' ]
  },
  module  : {
    rules : moduleRules
  },
  plugins      : plugins(),
  watch        : false,
  watchOptions : {
    ignored : /(node_modules)/
  },
  devtool : config.build.sourcemaps.js
};
