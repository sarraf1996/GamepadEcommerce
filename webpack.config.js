const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node', // This will define NodeJs as the environment in which the bundle should run.
    mode: 'production',

    plugins: [
        new copyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src'), to: path.resolve(__dirname, 'dist/src') }
            ],
        }),
    ],

    externalsPresets: { node: true }, // Ignore built-in modules like path, fs, etc. while build.
    externals: [nodeExternals()] // Ignore all modules in "node_modules" folder while build.
};