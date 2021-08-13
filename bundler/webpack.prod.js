const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(
    commonConfiguration,
    {
        output:
        {
            filename: 'bundle.prod.js',
            path: path.resolve(__dirname, '../dist'),
            publicPath: "/"
        },
        plugins:
        [
            new CopyWebpackPlugin({
                patterns:
                [
                    {
                        from: path.resolve(__dirname, "../src/manifest.webapp"),
                        to: path.resolve(__dirname, "../dist/manifest.webapp"),
                        toType: 'file',
                    },
                ]
            }),
            new CleanWebpackPlugin()
        ],
        mode: 'production'
    }
)
