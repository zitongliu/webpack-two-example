const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      },
      // any files ending with .css will be sent through both css-loader and style-loader
      // right to left, first css loader will be applied then output will be sent to style loader
      // {
      //   use: ['style-loader', 'css-loader'],
      //   test: /\.css$/
      // }
      {
        //loader and use are identical
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};


module.exports = config;
