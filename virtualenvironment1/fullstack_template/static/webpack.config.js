const webpack = require('webpack');
const config = {
	entry: __dirname + '/js/index.jsx',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ["es2015", "react"]
				}
			}
		]
	}
};
module.exports = config;





