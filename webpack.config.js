var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var config = {
     context: __dirname + '/app',
  entry: './app.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    }),
    new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here 
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
 // config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.devtool = 'source-map';
}

module.exports = config;
