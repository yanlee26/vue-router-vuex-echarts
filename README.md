# 医疗指标体系

### 前言

> 通过具体项目，尽可能综合应用vue全家桶，初步领会vue框架开发SPA的强大魅力

*其中echarts部分本版本未考虑移动端适配*

### 技术栈

#### 前端工程化
- npm
- node
- webpack

#### 前端技术
- Vue：数据驱动框架，模板引擎
- Vue-router:路由配置
- Vuex：状态管理
- SASS：CSS预处理
- CSS3/HTML5
- ES6：新一代JS语法糖
- Echarts：百度数据可视化工具

#### 目录简介
```
├── build--编译任务的代码
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js---
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config--webpack的配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist--打包压缩后生成的文件
|	├── css
|	├── fonts
|	├── img
|	├── js
│   └── index.html
├── fonts--字体图标文件
├── node_modules--项目中可能用到的所有的包
├── src
│   ├── assets
|	│   ├── scss文件
│   │   └── images
│   ├── components--一级导航vue文件
│   │   
│   ├── js---echarts数据，router及store配置
│   │  
│   ├── packages--二级导航vue文件
│   │  
│   ├── App.vue
│   └── main.js
├── .babelrc--babel配置项
├── .editorconfig--编辑信息配置
├── .gitignore--git配置项
├── index.html--入口页面
├── package.json--npm包配置信息
├── README.md
```

#### 开发环境
- Git (windows64)
- nodejs
- sublime
- ruby

### npm与webpack配置简要说明

#### 主要package.json配置说明

```
"scripts": {//执行npm run [command name]时运行的node模块
    "dev": "node build/dev-server.js",
    "build": "node build/build.js",
    "unit": "karma start test/unit/karma.conf.js --single-run",
    "e2e": "node test/e2e/runner.js",
    "test": "npm run unit && npm run e2e"
  },
  "dependencies": {//生产依赖
    "vue": "^2.0.1"
  },
  "devDependencies": {//开发依赖
    "autoprefixer": "^6.4.0",
    "babel-core": "^6.0.0",
    "babel-loader": "^6.0.0",
    "babel-plugin-transform-runtime": "^6.0.0",
    "babel-preset-es2015": "^6.0.0",
    "babel-preset-stage-2": "^6.0.0",
    "babel-register": "^6.0.0",
    "chai": "^3.5.0",
    "chalk": "^1.1.3",
    "chromedriver": "^2.21.2",
    "connect-history-api-fallback": "^1.1.0",
    "cross-spawn": "^4.0.2",
    "css-loader": "^0.25.0",
    "echarts": "^3.3.2",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.13.3",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "function-bind": "^1.0.2",
    "html-webpack-plugin": "^2.8.1",
    "http-proxy-middleware": "^0.17.2",
    "inject-loader": "^2.0.1",
    "isparta-loader": "^2.0.0",
    "json-loader": "^0.5.4",
    "karma": "^1.3.0",
    "karma-coverage": "^1.1.1",
    "karma-mocha": "^1.2.0",
    "karma-phantomjs-launcher": "^1.0.0",
    "karma-sinon-chai": "^1.2.0",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-spec-reporter": "0.0.26",
    "karma-webpack": "^1.7.0",
    "lolex": "^1.4.0",
    "mocha": "^3.1.0",
    "nightwatch": "^0.9.8",
    "opn": "^4.0.2",
    "ora": "^0.3.0",
    "phantomjs-prebuilt": "^2.1.3",
    "sass-loader": "^4.1.1",
    "selenium-server": "2.53.1",
    "semver": "^5.3.0",
    "shelljs": "^0.7.4",
    "sinon": "^1.17.3",
    "sinon-chai": "^2.8.0",
    "style-loader": "^0.13.1",
    "url-loader": "^0.5.7",
    "vue-loader": "^9.4.0",
    "vue-router": "^2.1.1",
    "vue-style-loader": "^1.0.0",
    "vuex": "^2.1.1",
    "webpack": "^1.13.2",
    "webpack-dev-middleware": "^1.8.3",
    "webpack-hot-middleware": "^2.12.2",
    "webpack-merge": "^0.14.1"
  },
```
#### 主要文件模块配置说明
- dev-server.js
```
// 获取 config/index.js 的默认配置
var config = require('../config')

// 如果 Node 的环境无法判断当前是 dev / product 环境
// 使用 config.dev.env.NODE_ENV 作为当前的环境

if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)

// 使用 NodeJS 自带的文件路径工具
var path = require('path')

// 使用 express
var express = require('express')

// 使用 webpack
var webpack = require('webpack')

// 一个可以强制打开浏览器并跳转到指定 url 的插件
var opn = require('opn')

// 使用 proxyTable
var proxyMiddleware = require('http-proxy-middleware')

// 使用 dev 环境的 webpack 配置
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic

// 如果没有指定运行端口，使用 config.dev.port 作为运行端口
var port = process.env.PORT || config.dev.port

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

// 使用 config.dev.proxyTable 的配置作为 proxyTable 的代理配置
var proxyTable = config.dev.proxyTable

// 使用 express 启动一个服务
var app = express()

// 启动 webpack 进行编译
var compiler = webpack(webpackConfig)

// 启动 webpack-dev-middleware，将 编译后的文件暂存到内存中
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

// 启动 webpack-hot-middleware，也就是我们常说的 Hot-reload
var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
// 将 proxyTable 中的请求配置挂在到启动的 express 服务上
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
// 使用 connect-history-api-fallback 匹配资源，如果不匹配就可以重定向到指定地址
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
// 将暂存到内存中的 webpack 编译后的文件挂在到 express 服务上
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
// 将 Hot-reload 挂在到 express 服务上
app.use(hotMiddleware)

// serve pure static assets
// 拼接 static 文件夹的静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// 为静态资源提供响应服务
app.use(staticPath, express.static('./static'))

// 让我们这个 express 服务监听 port 的请求，并且将此服务作为 dev-server.js 的接口暴露
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')

  // when env is testing, don't need open it
  // 如果不是测试环境，自动打开浏览器并跳到我们的开发地址
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
```
- webpack.dev.conf.js
```
// 同样的使用了 config/index.js
var config = require('../config') 

// 使用 webpack
var webpack = require('webpack') 

// 使用 webpack 配置合并插件
var merge = require('webpack-merge') 

// 使用一些小工具
var utils = require('./utils') 

// 加载 webpack.base.conf
var baseWebpackConfig = require('./webpack.base.conf') 

// 使用 html-webpack-plugin 插件，这个插件可以帮我们自动生成 html 并且注入到 .html 文件中
var HtmlWebpackPlugin = require('html-webpack-plugin') 

// add hot-reload related code to entry chunks
// 将 Hol-reload 相对路径添加到 webpack.base.conf 的 对应 entry 前
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// 将我们 webpack.dev.conf.js 的配置和 webpack.base.conf.js 的配置合并
module.exports = merge(baseWebpackConfig, {
  module: {
    // 使用 styleLoaders
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  // 使用 #eval-source-map 模式作为开发工具，此配置可参考 DDFE 往期文章详细了解
  devtool: '#eval-source-map',
  plugins: [

    // definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),

    // HotModule 插件在页面进行变更的时候只会重回对应的页面模块，不会重绘整个 html 文件
    new webpack.HotModuleReplacementPlugin(),

    // 使用了 NoErrorsPlugin 后页面中的报错不会阻塞，但是会在编译结束后报错
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin

    // 将 index.html 作为入口，注入 html 代码后生成 index.html文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
```
- webpack.base.conf.js
```
  / 使用 NodeJS 自带的文件路径插件
var path = require('path') 

// 引入 config/index.js
var config = require('../config') 

// 引入一些小工具
var utils = require('./utils') 

// 拼接我们的工作区路径为一个绝对路径
var projectRoot = path.resolve(__dirname, '../') 

// 将 NodeJS 环境作为我们的编译环境
var env = process.env.NODE_ENV

// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file

// 是否在 dev 环境下开启 cssSourceMap ，在 config/index.js 中可配置
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)

// 是否在 production 环境下开启 cssSourceMap ，在 config/index.js 中可配置
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)

// 最终是否使用 cssSourceMap
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
      // 编译文件入口
    app: './src/main.js' 
  },
  output: {
      // 编译输出的根路径
    path: config.build.assetsRoot, 
    // 正式发布环境下编译输出的发布路径
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath, 
    // 编译输出的文件名
    filename: '[name].js' 
  },
  resolve: {
    // 自动补全的扩展名
    extensions: ['', '.js', '.vue'],
    // 不进行自动补全或处理的文件或者文件夹
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
    // 默认路径代理，例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
      'vue': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      // 预处理的文件及使用的 loader
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      // 需要处理的文件及使用的 loader
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
	    },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  eslint: {
    // eslint 代码检查配置工具
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    // .vue 文件配置 loader 及工具 (autoprefixer)
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
```
-config/index.js
```
// see http://vuejs-templates.github.io/webpack for documentation.
// 不再重复介绍了 ...
var path = require('path')

module.exports = {
  // production 环境
  build: { 
      // 使用 config/prod.env.js 中定义的编译环境
    env: require('./prod.env'), 
    index: path.resolve(__dirname, '../dist/index.html'), // 编译输入的 index.html 文件
    // 编译输出的静态资源根路径
    assetsRoot: path.resolve(__dirname, '../dist'), 
    // 编译输出的二级目录
    assetsSubDirectory: 'static', 
    // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    assetsPublicPath: '/', 
    // 是否开启 cssSourceMap
    productionSourceMap: true, 
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 是否开启 gzip
    productionGzip: false, 
    // 需要使用 gzip 压缩的文件扩展名
    productionGzipExtensions: ['js', 'css'] 
  },
  // dev 环境
  dev: { 
      // 使用 config/dev.env.js 中定义的编译环境
    env: require('./dev.env'), 
    // 运行测试页面的端口
    port: 7000, 
    // 编译输出的二级目录
    assetsSubDirectory: 'static', 
    // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    assetsPublicPath: '/', 
    // 需要 proxyTable 代理的接口（可跨域）
    proxyTable: {}, 
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    // 是否开启 cssSourceMap
    cssSourceMap: false 
  }
}
```
-build.js
```
/ https://github.com/shelljs/shelljs

// 检查 Node 和 npm 版本
require('./check-versions')() 

// 使用了 shelljs 插件，可以让我们在 node 环境的 js 中使用 shell
require('shelljs/global') 
env.NODE_ENV = 'production'

// 不再赘述
var path = require('path') 

// 加载 config.js
var config = require('../config') 

// 一个很好看的 loading 插件
var ora = require('ora') 

// 加载 webpack
var webpack = require('webpack') 

// 加载 webpack.prod.conf
var webpackConfig = require('./webpack.prod.conf') 

//  输出提示信息 ～ 提示用户请在 http 服务下查看本页面，否则为空白页
console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

// 使用 ora 打印出 loading + log
var spinner = ora('building for production...') 
// 开始 loading 动画
spinner.start() 

// 拼接编译输出文件路径
var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
// 删除这个文件夹 （递归删除）
rm('-rf', assetsPath)
// 创建此文件夹 
mkdir('-p', assetsPath)
// 复制 static 文件夹到我们的编译输出目录
cp('-R', 'static/*', assetsPath)

//  开始 webpack 的编译
webpack(webpackConfig, function (err, stats) {
  // 编译成功的回调函数
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
```
-webpack.prod.conf.js
```
// 不再赘述
var path = require('path')

// 加载 confi.index.js
var config = require('../config')

// 使用一些小工具
var utils = require('./utils') 

// 加载 webpack
var webpack = require('webpack') 

// 加载 webpack 配置合并工具
var merge = require('webpack-merge') 

// 加载 webpack.base.conf.js
var baseWebpackConfig = require('./webpack.base.conf') 

// 一个 webpack 扩展，可以提取一些代码并且将它们和文件分离开
// 如果我们想将 webpack 打包成一个文件 css js 分离开，那我们需要这个插件
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// 一个可以插入 html 并且创建新的 .html 文件的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = config.build.env

// 合并 webpack.base.conf.js
var webpackConfig = merge(baseWebpackConfig, {
  module: {
    // 使用的 loader
    loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  // 是否使用 #source-map 开发工具，更多信息可以查看 DDFE 往期文章
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    // 编译输出目录
    path: config.build.assetsRoot,
    // 编译输出文件名
    // 我们可以在 hash 后加 :6 决定使用几位 hash 值
    filename: utils.assetsPath('js/[name].[chunkhash].js'), 
    // 没有指定输出名的文件输出的文件名
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  vue: {
    // 编译 .vue 文件时使用的 loader
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // 使用的插件
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    // definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // 压缩 js (同样可以压缩 css)
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // extract css into its own file
    // 将 css 文件分离出来
    new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // 输入输出的 .html 文件
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      // 是否注入 html
      inject: true, 
      // 压缩的方式
      minify: { 
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // split vendor js into its own file
    // 没有指定输出文件名的文件输出的静态文件名
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    // 没有指定输出文件名的文件输出的静态文件名
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
})

// 开启 gzip 的情况下使用下方的配置
if (config.build.productionGzip) {
  // 加载 compression-webpack-plugin 插件
  var CompressionWebpackPlugin =  require('compression-webpack-plugin')
  // 向webpackconfig.plugins中加入下方的插件
  var reProductionGzipExtensions = '\\.(' + config.build.productionGzipExtensions.join('|') + '$)'
  webpackConfig.plugins.push(
    // 使用 compression-webpack-plugin 插件进行压缩
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(reProductionGzipExtensions), // 注：此处因有代码格式化的bug，与源码有差异
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig
```









