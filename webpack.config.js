var autoprefixer = require('autoprefixer')
var precss       = require('precss')

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: './public',
        filename: "bundle.js",
        publicPath : "/public/"
    },
    module: {
        loaders: [
           { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
           { test: /\.less$/, loader: "style!css!postcss-loader!less" },
           { test: /\.html$/, loader: "raw-loader" },
           { test: /(\.jpg)|(\.svg)$/,    loader: "file-loader" }
        ]
    },
    postcss: function () {
      return [autoprefixer, precss]
    }
}
