import { resolve } from 'path'

export default {
	mode: 'production',
	entry: './frontend/main.js',
	output: {
		path: resolve('.', 'public', 'assets', 'js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			exclude: /node_modules/,
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env']
				}
			}
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	devtool: 'source-map'
}
