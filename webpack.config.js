var path = require('path');

module.exports = {
  entry: './src/app',
  output: {
    path: path.join(__dirname,'public'),
    filename: 'build/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
};