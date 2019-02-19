**documentation**

**introduction**

- documentation/concepts

**tutorial**

- documentation/guides

官网 https://webpack.js.org/
* [中文](https://doc.webpack-china.org/)

github 首页 http://webpack.github.io/
* [WEBPACK 1.X DOCUMENTATION](http://webpack.github.io/docs/)
	
***

### Gulp应该和Grunt比较，因为 Gulp 和 browserify / webpack 不是一回事

	`Webpack的工作方式`是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。
	
	vs
	
	`Grunt和Gulp的工作方式`是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，工具之后可以自动替你完成这些任务。
	

- 自动刷新页面、combo、压缩css、js、编译less（使用Gulp/Grunt，然后配置你需要的插件，就可以把以前需要手工做的事情让它帮你做）


### [入门 Webpack，看这篇就够了](https://segmentfault.com/a/1190000006178770)

`2016年08月05日发布 - 2017年8月13日更新 - 2017年8月16号更新`

#### 1. [Appendix A: Webpack for React](http://www.pro-react.com/materials/appendixA/)
- What is Webpack?

#### 2. 项目内部安装 webpack 版本路径：

`node_modules/.bin/webpack -v`

#### 3. devtool [13种配置](https://doc.webpack-china.org/configuration/devtool/)

提供了一种对应编译文件和源文件的方法。

`devtool: '#cheap-module-eval-source-map',`

	这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；但是不利于调试，推荐在大型项目考虑时间成本时使用。
	
#### 4. devServer 本地开发服务器 与 nodejs 的 webpack-dev-middleware

	webpack-dev-server是一个小型的Node.js Express服务器,它使用webpack-dev-middleware来服务于webpack的包,除此自外，它还有一个通过Sock.js来连接到服务器的微型运行时.

- 学习webpack，想使用webdevserver，但定制性太差，于是研究了一下使用webpack-dev-middleware进行指定
	* [webpack使用webpack-dev-middleware进行热重载](http://www.cnblogs.com/dreamless/p/6008362.html)
	
#### 5. loaders 通过使用不同的loader，webpack有能力调用外部的脚本或工具（如，Babel等），实现对不同格式的文件的处理

	Loaders需要单独安装并且需要在webpack.config.js中的`modules关键字`下进行配置。

- 转换scss为css
- 把下一代的JS文件（ES6，ES7)转换为现代浏览器兼容的JS文件
- 把React的中用到的JSX文件转换为JS文件

**把css嵌入webpack打包后的JS文件中**

	css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能。？？？

	style-loader将所有的计算后的样式加入页面中
	
**把css打包为单独的文件**

	

#### 6. `.babelrc`

	把babel的配置选项放在一个单独的名为 ".babelrc" 的配置文件
	
```javascript
// webapck.config.js
use: {
  loader: "babel-loader",
  options: {
    presets: [
      "es2015", "react"
    ]
  }
}, // 

// .babelrc
// {
//  "presets": ["react", "es2015"]
// }
use: {
    loader: "babel-loader"
},
```


## 模块化的方案
- seajs / require 是一种类型，browserify / webpack 是另一种类型

```
seajs / require : 是一种在线"编译" 模块的方案，相当于在页面上加载一个 CMD/AMD 解释器。这样浏览器就认识了 define、exports、module 这些东西。也就实现了模块化。

browserify / webpack : 是一个预编译模块的方案，相比于上面 ，这个方案更加智能。没用过browserify，这里以webpack为例。首先，它是预编译的，不需要在浏览器中加载解释器。另外，你在本地直接写JS，不管是 AMD / CMD / ES6 风格的模块化，它都能认识，并且编译成浏览器认识的JS。
```


#### [webpack官网有对二者(Browserify-webpack)的使用方法进行对比](http://webpack.github.io/docs/webpack-for-browserify-users.html)
- webpack
	- standalone ，即配置 umd 通用格式
	```bash
	{
	    output: {
	        library: "OutputLibrary",
	        libraryTarget: "umd"
	    }
	}
	```
- [Browserify](http://www.oschina.net/p/browserify?utm_source=tuicool&utm_medium=referral)
	- [Browserify lets you require('modules') in the browser by bundling up all of your dependencies.](http://browserify.org/)
	- Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过预编译让前端 Javascript 可以直接使用 Node NPM 安装的一些库。
	- 需要的所有其它文件都会被编译进 bundle.js 中，包括很多层 require() 的情况也会一起被递归式的编译过来。编译好的 js 可以直接拿到浏览器使用

## [rollup.js - 更小更快的Rollup取代Webpack和Browserify打包JavaScript文件](http://www.w3cplus.com/blog/tags/599.html)
- 因为Rollup基于ES2015模块，比Webpack和Browserify使用的CommonJS模块机制更高效。这也让Rollup从模块中删除无用的代码，即tree-shaking变得更容易

***

#### [为什么要使用Webpack](http://web.jobbole.com/84847/)
- 与react一类模块化开发的框架搭配着用比较好。
- 属于配置型的构建工具，比较用容易上手，160行代码可大致实现gulp400行才能实现的功能。
- webpack使用内存来对构建内容进行缓存，构建过程中会比较快。-> 而非读取文件实体或者是多个任务启动流内存
```
webpack会将文件内容存在 compilation 这个大的object里面，方便各种插件，loader间的调用。虽然gulp也用到了流(pipe)这样的内存处理方式，但感觉webpack更进一步。gulp是每一个任务(task)用一个流，而webpack是共享一个流。
```

#### [配置结构：](http://webpack.github.io/docs/configuration.html)
- entry
- output
- resolve 是用在解决矛盾，或者是解决大难题，用来显示问题的严重性
	```
	//查找module的话从这里开始查找
	root: 'E:/github/flux-example/src', //绝对路径
	//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
	extensions: ['', '.js', '.json', '.scss'],
	//模块别名定义，方便后续直接引用别名，无须多写长长的地址
	alias: {
	    AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
	    ActionType : 'js/actions/ActionType.js',
	    AppAction : 'js/actions/AppAction.js'
	}
	```
- module  里面配置加载器 loader
- plugins 比loader更强大，能使用更多webpack的api
- externals 声明是引用自外部模块的
	```
	externals: {
		// require("jquery") 是引用自外部模块的
		// 对应全局变量 jQuery
		"jquery": "jQuery"
	}
	```
	```Javascript
	// 直接使用CDN 文件或者 使用 script.js 在脚本中来加载外部模块
	var $script = require("scriptjs");
	$script("//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js", function() {
	  $('body').html('It works!')
	});
	```

webpack——前端模块化解决方案
http://webpack.github.io/
	https://webpack.github.io/docs/motivation.html
	Webpack 中文指南 - 赵达的个人网站
	http://zhaoda.net/webpack-handbook/
	http://zhaoda.net/webpack-handbook/module-system.html

转换器列表 - 获取转换器说明及版本信息
- Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果
http://webpack.github.io/docs/list-of-loaders.html
	extract text plugin for webpack 2
	https://github.com/webpack/extract-text-webpack-plugin
		For the webpack 1 version, see
		https://github.com/webpack/extract-text-webpack-plugin/blob/webpack-1/README.md

github - 相关资源
https://github.com/webpack?page=1

webpack使用优化（基本篇）
https://github.com/lcxfs1991/blog/issues/2

基于webpack的前端工程化开发之多页站点篇（一）
https://github.com/vhtml/webpack-MultiPage-static

基于webpack的前端工程化开发之多页站点篇（二）- 歪闹
https://github.com/vhtml/webpack-MultiplePage
https://segmentfault.com/a/1190000004516832
	学会查看webpack 的官方文档配置项，并对照理解；
	http://webpack.github.io/docs/configuration.html#output

react-webpack-cookbook
https://fakefish.github.io/react-webpack-cookbook/

webpack-howto
https://github.com/petehunt/webpack-howto

[2015阿里11.11：vue+webpack 的技术实践](http://frontenddev.org/link/ali-11-11-2015-vue-webpack-technology-practice.html)

webpack # 直接执行命令

#### [sourcemap](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
https://code.jquery.com/jquery-1.9.1.min.js
https://code.jquery.com/jquery.min.map
	Chrome浏览器支持这个功能，在 Developer Tools :
	Settings
		Preferences
			Sources
			勾选，Enable JavaScript source maps
			勾选，Enable CSS source maps

	soucemap 配置 devtool
	http://webpack.github.io/docs/configuration.html#devtool

[Hot Module Replacement - 热替换(Hot Module Replacement),简称HMR，是说应用可以动态的更新局部模块代码，而不需要刷新整个页面](http://blog.csdn.net/chengnuo628/article/details/52485461)


# [webpack.DllPlugin - 彻底解决Webpack打包性能问题](https://zhuanlan.zhihu.com/p/21748318)

- 使用webpack.DllPlugin与webpack.DllReferencePlugin解决webpack打包慢问题 - https://blog.csdn.net/hanxue_tyc/article/details/76795861

#### 步聚一  webpack.dll.conf.js
- entry - 入口，配置第三方资源依赖的列表
- plugins - 插件，new webpack.DllPlugin 指定生成的 `*-manifest.json` 及 变量名
#### 步聚二  webpack.prod.conf.js
- new webpack.DllReferencePlugin 指定 require 前面生成的 `*-manifest.json`
#### 步聚三  入口 html 文件 引用 vendor.dll.js
- <script type="text/javascript" src="./../vendor.dll.js"></script>
#### 步聚四  执行 npm run build:dll
#### 步聚五  执行 npm run build


***

webpack-dev-server - 是一个很小的express应用

```
webpack-dev-server --inline --config webpack.config.dev.js
```
- [devServer.contentBase  `--content-base ./ `配置 .html 访问主文件的目录](https://webpack.js.org/configuration/dev-server/#devserver-contentbase)

&presets[]=babel-preset-stage-1
	babel-loader 加载器新增以下查询参数时，babel 才能识别 ...state, 扩展运算符

webpack传统后端渲染的项目前端配置 - 后端渲染 - 170303
http://jsfront.org/2017/03/01/webpack-backend-render-configuration/
	热加载、热更新 - Hot Reload
		热加载的思想是运行时动态注入修改后的文件内容，同时不中断 APP 的正常运行。这样，我们就不会丢失 APP 的任何状态信息，尤其是 UI 页面栈相关的。
		当你在开发环境修改代码后，不用刷新整个页面即可看到修改后的效果。
		减少ctrl + r的使用率,充分利用两个屏幕的便利
		更新时跳过初始化的内容
			browse-sync的插件: browser-sync-webpack-plugins

			# 纯前端的项目
			webpack-dev-server，实际上是一个小型Express服务器，它是用webpack-dev-middleware来处理webpack编译后的输出

	实时（侦听有变化时）更新 - live reload
		实时加载应用更新时需要刷新当前页面，可以看到明显的全局刷新效果，而热加载基本上看不出刷新的效果，类似于局部刷新

	打包后的资源生成与插入
		前端渲染
			通过html-webpack-plugin插件，使用模板文件生成需要的html资源
			html-webpack-plugin
		后端渲染 - webpack-manifest-plugin
			webpack打包的时候生成资源文件索引manifest,然后后端通过索引在需要的地方插入(读取)资源文件
			生成资源文件索引以后,后端可以配置cdn的路径
			* 由于webpack-dev-server是另外起一个服务器,所以就当是cdn了,当然如果你后端是nodejs可以使用webpack-dev-middleware代替webpack-dev-server

			webpack就可以进行动态编译了,不需要改动一点点就全部编译新原理：
		WebSocket 是一个独立的基于TCP的协议，前端和服务器端可以建立起一个长连接，客户端可以向服务器端推送消息，服务器也可以主动向客户端推送消息
		浏览器的网页通过websocket协议与服务器建立起一个长连接，当服务器的css/js/html进行了修改的时候，服务器会向前端发送一个更新的消息，如果是css或者html发生了改变，网页执行js直接操作dom，局部刷新，如果是js发生了改变，只好刷新整个页面。

	页面是后端渲染的,所以访问链接也是后端提供的,需要设置代理。代理好了后配合webpack-dev-server

[webpack-dev-server - 配置信息](http://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)
vs
[DevServer - ](https://doc.webpack-china.org/configuration/dev-server/)

# [webpack基本配置](http://www.frezc.com/archives/48/?utm_source=tuicool&utm_medium=referral)
```json
"start": "webpack-dev-server --devtool eval --progress --hot --colors --content-base app",
```
devtool: 在开发中可以使用 'eval' (打包速度快)、 'inline-source-map' (打包速度慢，但在浏览器里能直接查看编译前的代码)等值；生成环境中不要设置或设为 false

***

## webpack 2.x
- [webpack v2.x documentation](https://doc.webpack-china.org/about/)
- [Version v2.x documentation](https://webpack.js.org/configuration/)

#### [Webpack2 升级指南和特性摘要](https://segmentfault.com/a/1190000008181955)

#### [webpack 支持 tree-shaking 2016-03-31](https://www.zhihu.com/question/41922432)
- 通过 entry 打包出 bundle 的模式下，才有实际意义。
- 有人总结了一个定义：DCE (dead code elimination) 消灭`不可能执行`的代码，tree-shaking 消灭`没有用到`的代码。

***

# 将 node 环境里配置（在 package.json）的变量参数，传递到 webpack 编译阶段的方法：
```js
/* 
安装cross-env:
npm install cross-env --save-dev

(以unix方式设置环境变量，然后在windows上也能兼容运行)
 */

// 方法一：
// 在webpack插件中如此定义
new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: '"production"'
    }
})

// 方法二：
// 
// 先在package.json
"scripts": {
     "watch": "cross-env NODE_ENV=production  ....."
 }, 
// 然后在webpack插件配置
new webpack.EnvironmentPlugin(['NODE_ENV']),
```


***

# webpack4

- webpack 4 配置最佳实践【语雀精选】 -  https://mp.weixin.qq.com/s?__biz=MzU1NTUwMzkwOA==&mid=2247483909&idx=1&sn=05c67754a51cd2a26c6001be15e220d6&chksm=fbd21a4ecca59358ab685a2024db528a6cf4737dd0ef7aa6f06f54a7b741478acec15f795cb5&mpshare=1&scene=1&srcid=0625bMA9AElnqzqaztNOg6M7&pass_ticket=VxT3E%2BcpgvzJVDhQ08lON6hJRSP4XwpjKQGUb%2BTmfkBn4sR8zk%2BoAPmg0tS4B0Us#rd

```javascript
/*
需求1：有 a, b, c 三个入口。我们希望 a，b 的公共代码单独打包为 common。也就是说 c 的代码不参与公共代码的分割。

 */
// 分割代码，以 chunk 为单位：
// chunks 可以是一个函数，在这个函数里我们可以拿到 chunk.name。这给了我们通过入口来分割代码的能力。这是一种细粒度比较大的方式，以 chunk 为单位。
// 定义一个 cacheGroups，然后设置 chunks 属性为一个函数
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks(chunk) {
            return chunk.name !== 'c';
          },
          name: 'common',
          minChunks: 2,
        },
      },
    },
  },


/* 
需求2：有 a, b, c, d 四个入口。我们希望 a，b 的依赖打包为 vendor1，c, d 的依赖打包为 vendor2。

*/
  vendors1: {
      test: module => {
        for (const chunk of module.chunksIterable) {
              if (chunk.name && /(a|b)/.test(chunk.name)) {
                  if (module.nameForCondition() && /[\\/]node_modules[\\/]/.test(module.nameForCondition())) {
                   return true;
               }
              }
         }
        return false;
      },
      minChunks: 2,
      name: 'vendors1',
      chunks: 'all',
    },
    vendors2: {
      test: module => {
        for (const chunk of module.chunksIterable) {
              if (chunk.name && /(c|d)/.test(chunk.name)) {
                  if (module.nameForCondition() && /[\\/]node_modules[\\/]/.test(module.nameForCondition())) {
                   return true;
               }
              }
         }
        return false;
      },
      minChunks: 2,
      name: 'vendors2',
      chunks: 'all',
    },
  };

```

# 分离资源与主入口html 文件到不同服务器
[引用的路径是publicPath + 图片相对于output.path的路径](https://blog.csdn.net/bingzhilingyi/article/details/80085320)

# 使用 require.ensure 就必须解决按需加载在`不同环境`下配置成不同地址的需求
1. 解决方式 __webpack_public_path__
	* __webpack_public_path__ 的添加位置： 入口html文件 | 调用按需加载的文件
		```
		var $path = document.querySelector('meta[name="AppPublic"]');
		__webpack_public_path__ = $path
	                ? $path.getAttribute('content')+'/app/js/'
	                : '/';
	  ```
	- __webpack_public_path__ must be a free var
		- https://github.com/webpack/webpack/issues/443
		- It is a free variable which gets rewritten by webpack into __webpack_require__.p.
	- [Responsibility of the PHP Script](https://github.com/swashata/wp-webpack-script/issues/2)
	* 移除默认设置的 output.publicPath 属性，入口文件的前缀只能手动添加？？？这是错误，因为它是会能够被覆盖重写的
2. 让运维配置内网访问 与 外网访问 一致？？
	// 1. dev sit uat 内网访问 107 上的 resources.317hu.com  外网访问七牛上的 空间
  // 2. prod 生产环境 branchEnv 值变更为 版本号
  // 3. 各环境都构建成一致的： publicPath ？？？生产环境好像有弯路


***

#### [webpack系列之二Tapable](https://juejin.im/post/5c25f920e51d45593b4bc719)

