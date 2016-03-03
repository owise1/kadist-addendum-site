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
           { test: /\.less$/, loader: "style!css!less" }
        ]
    }
}
