const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var DashboardPlugin = require("webpack-dashboard/plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
rimraf('./dist', err => { 
    console.log(err)
})
const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                sideEffects: true,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'cache-loader',
                    'vue-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 4096,
                      esModule: false,
                      fallback: {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'static/img/[name].[hash:8].[ext]'
                        }
                      }
                    }
                  }
                ]
              },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 9000,
        // publicPath: '/assets/'
    },
    // devtool: 'cheap-module-eval-source-map',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./dist/dll/manifest.json')
        // }),
        // new ExtractTextPlugin({
        //     filename: '[name]'
        // }),
        // new webpack.optimize.splitChunks({
        //     name: 'common' // 指定公共 bundle 的名称。
        // })
        // new webpack.optimization.minimizer[
        //     new UglifyJsPlugin({
        //         uglifyOptions: {
        //             warnings: false,
        //             compress: {
        //                 drop_console: true
        //             }
        //         }
        //     })
        // ],
    ]
}
if (process.env.npm_config_report) {
    config.plugins.push(
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    )
}
module.exports = config
