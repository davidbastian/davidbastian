var path = require('path');

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, '../app/main.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
    module: {
        loaders: [{
            test: /\.html$/, // Only .html files
            loader: 'ngtemplate!html'
        },{

        	loader: "babel-loader",
      		test: /\.jsx?$/,
      		query: {
        		presets: ['es2015', 'stage-0']
      		}
        }

        ]

    }
};

module.exports = config;
