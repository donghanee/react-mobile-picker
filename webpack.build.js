var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'react-mobile-picker': './src/index.js'
  },

  output: {
    path: path.resolve("./lib"),
    filename: '[name].js',
    library: 'Picker',
    libraryTarget: 'umd'
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],

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
    //   {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
    //   {test: /\.less$/, loader: 'style!css!autoprefixer!less'}
    // ]
  },

  plugins: [
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ]
  // plugins: [
  //   // new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: '"production"'
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: {
  //       warnings: false
  //     }
  //   })
  // ]
};
