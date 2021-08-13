const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(
    commonConfiguration,
    {
        output:
        {
            filename: 'bundle.dev.js',
            path: path.resolve(__dirname, '../dev'),
            publicPath: "/dev/"
        },
        plugins:
        [
            new CopyWebpackPlugin({
                patterns:
                    [
                        {
                            from: path.resolve(__dirname, "../src/manifest.webapp"),
                            to: path.resolve(__dirname, "../dev/manifest.webapp"),
                            toType: 'file',
                        },
                    ]
            }),
        ],
        mode: 'development',
        devtool: 'source-map',
        devServer:
        {
            publicPath: "/dev/",
            host: '0.0.0.0',
            contentBase: './dev',
            open: true,
            https: false,
            useLocalIp: true,
            writeToDisk: true
        }
    }
)
