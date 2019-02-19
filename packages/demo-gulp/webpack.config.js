import webpack from 'webpack';
var path = require('path');
var fs = require('fs');
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var CommonsChunkPlugin= webpack.optimize.CommonsChunkPlugin;
//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var srcDir = path.resolve(process.cwd(), 'src');

/* 获取多页面的每个入口文件，用于配置中的entry */
function getEntry() {
    var jsPath = path.resolve(srcDir, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    return files;
}

module.exports = {
    cache: false,
    //devtool: "source-map", // 在生成的代码中加入sourceMap的支持。能够直接定位到出错代码的具体位置
    entry: getEntry(),
    output: {
        path: path.join(__dirname, "dist/js/"),
        publicPath: "dist/js/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    resolve: {

        /* 配置别名，在项目中可缩减引用路径 */
        alias: {
            core: srcDir + "/js/core",
            ui: srcDir + "/js/ui",
            //flexJs: srcDir + "/js/ui/flex.js",
            jquery: srcDir + "/js/lib/jquery-3.0.0.slim.min.js"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({// 提供全局的变量，在模块中使用无需用require引入
            jQuery: "jquery",
            $: "jquery",
            // nie: "nie"
        }),
        new CommonsChunkPlugin('common.js'),// 合并共用代码并生成一个共用文件
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({// 在最新的React(V15)里，进行 presets: ['react', 'es2015'] 操作时
          "process.env": {
             NODE_ENV: JSON.stringify("production")
           }
        })
    ],
    module: {

        /* 配置加载器，即让各种文件格式可用require引用 */
      loaders: [
        {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel?presets[]=es2015&presets[]=react&presets[]=stage-1']},
        // {test: /(\.css|\.less)$/, include: path.join(__dirname, 'src'), loaders: ['css!postcss']},
        // { test: /\.css$/, loader: "style-loader!css-loader"},
        // { test: /\.less$/, loader: "style-loader!csss-loader!less-loader"},

      ]
    },
    postcss: ()=> [autoprefixer],

};
