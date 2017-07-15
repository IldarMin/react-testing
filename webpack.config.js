var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var dirname = __dirname + "/app";

module.exports = {
  context: dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/app.js",
  output: {
    path: dirname + "/js",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
