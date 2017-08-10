const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename:  'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        // if the file end with js, babel will be applied
        test: /\.js$/
      }
    ]
  }
};


module.exports = config;
