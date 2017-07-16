var debug = process.env.NODE_ENV !== "production";
console.log(debug);
var webpack = require('webpack');
var dirname =  __dirname + "/app";

var ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractCSS = new ExtractTextPlugin("app.bundle.css");
const extractLESS = new ExtractTextPlugin('stylesheets/name-two.css');

module.exports = {
  context: dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/app.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        test: /\.less$/,
        loader: !debug ? ExtractTextPlugin.extract("css-loader?modules&localIdentName=[name]__[local]!less-loader") :
                'style-loader!css-loader?modules&localIdentName=[name]__[local]!less-loader'
      }
    ]
  },
  output: {
    path: debug ? dirname : __dirname + "/dist",
    filename: "app.min.js"
  },
  plugins: debug ? [
  ] : [
    new ExtractTextPlugin("app.css"),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
