const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node', // This will define NodeJs as the environment in which the bundle should run.
    externalsPresets: { node: true }, // Ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // Ignore all modules in "node_modules" folder.
    mode: 'production'
};