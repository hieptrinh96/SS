const path = require('path')
module.exports = {
    entry: {
        index: ['babel-polyfill', './src/index.js'],
        edit: ['babel-polyfill', '/src/edit.js'],
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        // if i have the publicPath uncommented, the dev-server will not be able to run
        // publicPath: '/scripts/'
    },
    devtool: 'source-map'
}
