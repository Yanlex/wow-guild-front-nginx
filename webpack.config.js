const path = require('path');
// webpack.config.js
const webpack = require('webpack');
const dotenv = require('dotenv');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// это обновит process.env переменными окружения в .env файле
dotenv.config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve(__dirname, './src/index.tsx'),
		// another: path.resolve(__dirname, 'src/RaiderIoApi.tsx'),
		// additional: path.resolve(__dirname, 'src/rioColors.tsx'),
	},
	output: {
		path: path.resolve(__dirname, './public_html'),
		publicPath: '/',
		filename: '[name].[contenthash].bundle.js',
		clean: true,
	},
	devtool: 'inline-source-map', // devtool: 'inline-source-map' выключать если продакшн!!!
	mode: 'development', // production or development не забыть выключить new ReactRefreshWebpackPlugin() и devtool: "inline-source-map"
	module: {
		rules: [
			{
				test: /\.(tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader'],
			},
			{
				test: /\.xml$/i,
				use: ['xml-loader'],
			},
			{
				test: /\.mp4$/,
				type: 'asset/source',
			},
		],
	},
	resolve: {
		fallback: {
			process: require.resolve('process/browser'),
		},
		alias: {
			Components: path.resolve(__dirname, './src/Components'),
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack Boilerplate',
			template: path.resolve(__dirname, './src/template.html'), // шаблон
			filename: 'index.html', // название выходного файла
		}),
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
		new ReactRefreshWebpackPlugin(), // new ReactRefreshWebpackPlugin() ВЫКЛЮЧИТЬ ЕСЛИ ПРОДАКШН
		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/assets/video', to: 'assets/video' },
				{ from: './src/assets/img', to: 'assets/img' },
			],
		}),
		new MiniCssExtractPlugin({
			filename: 'style.[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
		}),
	],
	devServer: {
		historyApiFallback: true,
		port: 5001,
		open: true,
		hot: true,
		watchFiles: [path.resolve(__dirname, './src')],
	},
};
