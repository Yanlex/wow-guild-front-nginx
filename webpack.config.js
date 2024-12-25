const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// это обновит process.env переменными окружения в .env файле
dotenv.config();

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production';

	return {
		entry: {
			index: path.resolve(__dirname, './src/index.tsx'),
			// another: path.resolve(__dirname, 'src/RaiderIoApi.tsx'),
			// additional: path.resolve(__dirname, 'src/rioColors.tsx'),
		},
		output: {
			path: path.resolve(__dirname, './public_html'),
			publicPath: isProduction ? './' : '/',
			filename: '[name].[contenthash].bundle.js',
			clean: true,
		},
		devtool: isProduction ? false : 'inline-source-map', // devtool: 'inline-source-map' выключать если продакшн!!!
		mode: isProduction ? 'production' : 'development', // production or development не забыть выключить new ReactRefreshWebpackPlugin() и devtool: "inline-source-map"
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
				template: isProduction
					? path.resolve(__dirname, './src/template-prod.html')
					: path.resolve(__dirname, './src/template-prod.html'), // шаблон
				filename: 'index.html', // название выходного файла
			}),
			new webpack.ProvidePlugin({
				process: 'process/browser',
			}),
			new webpack.DefinePlugin({
				'process.env': JSON.stringify(process.env),
			}),
			!isProduction && new ReactRefreshWebpackPlugin(), // new ReactRefreshWebpackPlugin() ВЫКЛЮЧИТЬ ЕСЛИ ПРОДАКШН
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
		].filter(Boolean),
		devServer: {
			historyApiFallback: true,
			port: 5001,
			open: true,
			hot: true,
			watchFiles: [path.resolve(__dirname, './src')],
		},
	};
};
