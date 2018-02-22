const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const Clean = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET_POINT = process.env.TARGET_POINT;
const NODE_MODE = process.env.NODE_ENV || 'development'; 
const IS_PROD = NODE_MODE === 'production';

const INPUT_CLIENT = path.resolve(__dirname, './src/index.ts');
const INPUT_SERVER = path.resolve(__dirname, './server/server.ts');
// const INPUT_CLIENT = './src/index.ts';
// const INPUT_SERVER = path.resolve(__dirname, './server/server.ts');
const OUT_PATH = 'dist';

const clientPolyfill = ['whatwg-fetch'];

const rules = [
    {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        loader: 'ts-loader'
    }
];

const resolve = {
    extensions: ['.tsx', '.ts', '.js']
};

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {'NODE_ENV': JSON.stringify(NODE_MODE)}
    })
];

const watchOptions = {
    aggregateTimeout: 300,
    poll: 1000
};

console.log('process.env.NODE_ENV: ' + NODE_MODE);

// ----- CONFIGS
const clientConfig = {
    target: 'web',
    entry: [...clientPolyfill, INPUT_CLIENT],
    output: {
        path: path.resolve(OUT_PATH),
        filename: 'app.bundle.js'
    },
    devtool: IS_PROD ? false : 'eval-source-map',
    module: {
        rules: rules.concat([{
            test: /\.scss$/,
            exclude: /index.scss|node_modules/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!sass-loader'
            })
        }])
    },
    watchOptions: watchOptions,
    resolve: resolve,
    plugins: plugins
        .concat([
            new Clean([OUT_PATH]),
            new Copy([
                { from: './index.html' },
                // { from: './favicon.ico' },
                { from: './node_modules/weather-icons/css/weather-icons.css', to: 'weather-icons/css' },
                { from: './node_modules/weather-icons/font', to: 'weather-icons/font' },
                { from: './node_modules/react-md/dist/react-md.teal-blue.min.css', to: 'react-md.min.css' }
            ]),
            new ExtractTextPlugin({
                filename: 'main.css',
                allChunks: true
            })
        ])
};

const serverConfig = {
	target: 'node',
	entry: INPUT_SERVER,
	externals: [nodeExternals()],
	context: __dirname,
	node: {
		__filename: true,
		__dirname: true
	},
	output: {
    	path: path.resolve(__dirname, OUT_PATH),
		filename: 'server.bundle.js',
		libraryTarget: 'commonjs'
	},
	devtool: 'eval-source-map',
    module: {rules: rules},
    watchOptions: watchOptions,
	resolve: resolve,
	plugins: plugins
};

let CONFIGS = [clientConfig, serverConfig];

if (TARGET_POINT === 'SERVER') {
	CONFIGS = [serverConfig];
}
if (TARGET_POINT === 'CLIENT') {
	CONFIGS = [clientConfig];
}

module.exports = CONFIGS;