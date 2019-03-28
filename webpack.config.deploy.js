const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './example/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'deploy.js',
    libraryTarget: 'umd',
    library: 'GitHubLoginApp'
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }],
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false
    }),
//    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
