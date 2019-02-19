# 查询当前环境变量
echo $PATH
--> /Users/galaxyw/git/nvm/versions/node/v5.10.1/bin:/Users/galaxyw/.rvm/gems/ruby-2.3.0/bin:/Users/galaxyw/.rvm/gems/ruby-2.3.0@global/bin:/Users/galaxyw/.rvm/rubies/ruby-2.3.0/bin:/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/galaxyw/.rvm/bin

# `babel-cli` 工具自带一个 babel-node 命令，提供一个支持ES6的REPL环境

## 1）使用 npm 项目中：
    项目去除对环境（全局安装babel）的依赖（全局移除当前 babel 版本）
    - npm uninstall babel -g
    支持不同项目使用不同版本的Babel
    ```package.json
    "devDependencies": {
      "babel-cli": "^6.14.0",
      "babel-core": "^6.14.0",
      "babel-eslint": "^7.1.1",
      "babel-plugin-import": "1.0.1",
      "babel-plugin-react-display-name": "2.0.0",
      "babel-polyfill": "^6.9.0",
      "babel-preset-es2015": "6.14.0",
      "babel-preset-react": "6.11.1",
      "babel-preset-react-hmre": "1.1.1",
      "babel-preset-stage-1": "6.13.0",
      "babel-preset-stage-2": "6.13.0",
      "babel-register": "^6.14.0"
    }
    "scripts": {
        "build": "babel-node ./a.js --presets es2015,stage-2"
    },
    ```
    - $ npm run build

## 2）REPL环境 - 直接执行 babel-node 就进入REPL环境
$ babel-node
> (x => x * 2)(1)

## Index
1. [request-sync - 加载模块是同步的.所以只有加载完成才能执行后面的操作](#demo01-request-sync)
2. [require-A-B - 循环依赖处理，方法执行](#demo02-require-A-B)
3. [require-A-B - 循环依赖处理](#demo03-require-A-B)
