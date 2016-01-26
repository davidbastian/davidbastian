var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, '../app/app.js')],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js'
    },
     plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [{
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded',
                ]
            }, {
                test: /\.html$/, // Only .html files
                loader: 'raw-loader'
            }, {

                loader: "babel-loader",
                test: /\.jsx?$/,
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader?importLoaders=1"
            }

        ]

    }
};
module.exports = config;
