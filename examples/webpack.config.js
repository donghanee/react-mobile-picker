var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'main.js')
  ],

  output: {
    path: path.join(__dirname, '__build__'),
    publicPath: '/__build__/',
    filename: 'bundle.js'
  },

  module: {
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader: "babel-loader",   
        }
      },
      {
        test:/\.less$/,        
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader'
          },
          {
            loader:'less-loader'
          },
        ]
          
          // loader:'style!css!autoprefixer!less',
        
      },      
    ],
    // loaders: [
    //   {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
    //   {test: /\.less$/, loader: 'style!css!autoprefixer!less'}
    // ]
  },

  resolve: {
    alias: {
      'react-mobile-picker': path.join(__dirname, '..', 'src')
    }
  },
  
  plugins: [
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ]
};
