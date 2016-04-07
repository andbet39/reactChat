var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
		path: './dist',
    filename: 'bundle.js',
		publicPath: '/'
  },
  devServer:{
  	inline:true,
  	contentBase:'./dist'
  },
  module: {
    loaders: [
      {
	        test: /.jsx?$/,
	        loader: 'babel',
	        exclude: /(node_modules|bower_components)/,
	        query: {
	          presets: ['es2015', 'react']
	        }
      },
			{
		     test: /\.css$/,
		     loaders: [
		       'style', 'css'
		     ]
   		}
    ]
  },
};
