const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
    src: __dirname + '/src',
    dist: __dirname + '/web',
    public: `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/'),
}

module.exports = {
    context: paths.src,
    entry: {
        app: `${paths.src}/index.js`,
    },
    output: {
        filename: '[name].js?v=[hash]',
        path: paths.dist,
        publicPath: paths.public,
    },
    devtool: 'cheap-source-map',
    resolve: {
        modules: [
            paths.src,
            'node_modules'
        ],
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@constants': path.resolve(__dirname, 'src/constants'),
        },
    },
    devServer: {
        contentBase: paths.dist,
        historyApiFallback: {index: paths.public},
        compress: true,
        progress: true,
        https: true,
        hot: true,
        host: 'localhost',
        port: '8080',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|woff2?|ttf|eot|gif)$/,
                loader: 'url-loader?limit=8000'
            },
            {
                test: /\.svg/,
                loader: 'file-loader'
            },
            {
                test: /\.pdf/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: process.env.APP_TITLE,
            filename: 'index.html',
            template: path.join(process.cwd(), 'public/index.ejs'),
        }),
        new CopyWebpackPlugin([
            path.join(process.cwd(), 'public/send_mail.php'),
            ], {
                force: true,
            }),
    ]
}
