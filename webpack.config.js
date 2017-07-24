const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: {
        app: './app.js',
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    devServer: {
        port: 3003,
        compress: true,
    },

    plugins: [
        new HtmlWebpackPlugin(),
    ],
};