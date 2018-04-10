const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry : './src/demo.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'demo.bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                use:[
                    {loader : 'babel-loader'},
                ]
            },
            {
                test : /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            {
				test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				use: [
                    {
                        loader : path.resolve(__dirname, '../index.js'),
                        options : {
                            limit : 1000,
                            name : '[name].[ext]?[hash:8]',
                            outputPath: 'assets/'
                        }
                    }
                ]
			}
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.bundle.css"),
    ]
}
