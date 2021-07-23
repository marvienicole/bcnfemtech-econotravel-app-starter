const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const path = require("path");
const isDevelopment = process.env.NODE_ENV === 'development';


module.exports = {
    devServer: {
        inline: true,
        historyApiFallback: true,
        port: 8081
    },
    entry: [
        path.join(__dirname, 'src/js/main.js')
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        {
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-transform-runtime'
                            ],
                        }
                    ]
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[fullhash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[fullhash].css'
        }),
        new CopyWebPackPlugin({
            patterns: [
                {from: 'src/static'}
            ]
        }),
        function () {
            return [
                require('autoprefixer')
            ];
        },
    ]
}