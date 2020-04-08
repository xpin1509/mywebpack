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
// 一个 JavaScript 命名函数。
function MyExampleWebpackPlugin(options) {}

// 在插件函数的 prototype 上定义一个 `apply` 方法。
MyExampleWebpackPlugin.prototype.apply = function(compiler) {
  // 指定一个挂载到 webpack 自身的事件钩子。
  compiler.plugin('done', function(compilation /* 处理 webpack 内部实例的特定数据。*/) {
    var fs = require("fs");
    function getdirsize(dir,callback){
        var size = 0;
        fs.stat(dir,function(err,stats){
            if(err) return callback(err);//如果出错
            if(stats.isFile()) return callback(null,stats.size);//如果是文件
    
            fs.readdir(dir,function(err,files){//如果是目录
                if(err) return callback(err);//如果遍历目录出错
                if(files.length==0) return callback(null,0);//如果目录是空的
    
                var count = files.length;//哨兵变量
                for(var i = 0;i<files.length;i++){
                    getdirsize(path.join(dir,files[i]),function(err,_size){
                        if(err) return callback(err);
                        size+=_size;
                        if(--count<=0){//如果目录中所有文件(或目录)都遍历完成
                            callback(null,size);
                        }
                    });
                }
            });
        });
    }
    getdirsize('./dist', (err, size) => {
        const kbSize = parseInt(size / 1024, 10)
        // 钉钉通知
        // 关键词
        // https://oapi.dingtalk.com/robot/send?access_token=37cd51e9f1f37f2674216bc73d47aa600ec8fe28330b5624dc8c275419820ced
    })
  })
};
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
        new MyExampleWebpackPlugin()
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
