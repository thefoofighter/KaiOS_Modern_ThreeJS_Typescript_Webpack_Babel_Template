const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    plugins:
    [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: "write-references",
            },
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            }
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // JS/TS
            {
                test: /\.(ts|js)x?$/,
                exclude: { and:[/node_modules/],not:[/three/]},
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}],
                            [
                                "@babel/preset-typescript",
                                { isTSX: true, allExtensions: true }
                            ]
                        ],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },

            // Images
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/textures/'
                        }
                    }
                ]
            },
            // 3d
            {
                test: /\.(glb|gltf)$/,
                use:
                    [
                        {
                            loader: 'file-loader',
                            options:
                            {
                                outputPath: 'assets/models/'
                            }
                        }
                    ]
            },
            // Shaders
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                use:
                    [
                        {
                            loader: 'raw-loader'
                        }
                    ]
            }
        ]
    }
}
