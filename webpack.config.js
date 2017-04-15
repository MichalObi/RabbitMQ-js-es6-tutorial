var webpack = require("webpack");
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        receive: './src/receive.js',
        send: './src/send.js'
    },
    output: {
        filename: './dist/[name].js'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({banner: '#!/usr/bin/env node', raw: true})
    ]
};