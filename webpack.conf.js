let webpack = require("webpack")

module.exports = {
    entry: [
        "webpack-dev-server/client?http://127.0.0.1:8080",
        "webpack/hot/only-dev-server",
        __dirname + "src/index.js"
    ],
    output: {
        path: __dirname,
        filename: "build/bundles.js"
    },
    module: {
        module: {
            loaders: [
                {test: /\.js?$/, exclude: /node_modules/, loader: "babel"},
                {test: /\.css$/, loader: "style!css"}
            ]
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // webpack hot replace plugin
    ]
}