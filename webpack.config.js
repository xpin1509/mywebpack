const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
rimraf('./dist/static', err => { 
    // 删除当前目录下的 test.txt
    console.log(err)
})
const config = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 9000
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/dll/manifest.json')
        })
    ],
}
if (process.env.npm_config_report) {
    config.plugins.push(
        new BundleAnalyzerPlugin({
            openAnalyzer: true
        })
    )
  }
module.exports = config
