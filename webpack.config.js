var webpack = require('webpack');
var path = require('path');

var PLUGINS = [];
if (process.env.NODE_ENV === 'production') {
  PLUGINS.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'build/build.js'
  },
  plugins: PLUGINS,
  devServer: {
    contentBase: path.join(__dirname, '.'),
    compress: true,
    port: 3000
  },
  resolve: {
    exstensions: ['.js', '.json', '.jsx']
  }
};
