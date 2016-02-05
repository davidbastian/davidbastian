var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var config = {
    context: __dirname + '/app',
    entry: './app.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    externals: {
        'TweenLite': 'TweenLite',
        'Draggable': 'Draggable'
    },

    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
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
                exclude: /node_modules/,
                test: /\.js?$/,
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

if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    }));
    config.devtool = 'source-map';
}

module.exports = config;
