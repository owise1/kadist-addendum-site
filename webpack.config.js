var autoprefixer = require('autoprefixer')
var precss       = require('precss')
var webpack = require('webpack')

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: 'public/',
        filename: "bundle.js",
        publicPath : "/"
    },
    module: {
        loaders: [
           { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
           { test: /\.less$/, loader: "style!css!postcss-loader!less" },
           { test: /\.html$/, loader: "raw-loader" },
           { test: /(\.jpg)|(\.svg)$/,    loader: "file?name=[name].[ext]" }
        ]
    },
    postcss: function () {
      return [autoprefixer, precss]
    },
    plugins : [
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
        __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
     })
    ]
}
