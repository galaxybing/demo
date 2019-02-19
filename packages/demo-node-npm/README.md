# 查询当前环境变量
echo $PATH
--> /Users/galaxyw/git/nvm/versions/node/v5.10.1/bin:/Users/galaxyw/.rvm/gems/ruby-2.3.0/bin:/Users/galaxyw/.rvm/gems/ruby-2.3.0@global/bin:/Users/galaxyw/.rvm/rubies/ruby-2.3.0/bin:/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/galaxyw/.rvm/bin

# 全局移除当前 babel 版本
npm uninstall babel -g

# 1）项目去除对环境（全局安装babel）的依赖 ；2）另一方面，支持不同项目使用不同版本的Babel
package.json
    "devDependencies": {
        "babel-cli": "^6.14.0"
    },
    "scripts": {
        "build": "babel-node ./a.js --presets es2015,stage-2"
    },

$ npm run build

# 退出当前node 执行环境：

- process.exit()
