/*
 * 核心模块 fs 的方法使用示例：
 *
 * 读写文本文件
 * fs.readFile
 * fs.writeFileSync
 */

// var Foo = require('./demoRequestHandler');// 可以 node ./main.js；也可以通过 npm run ...
// 
// import Foo from "./demo";// 需要 babel-preset-es2015 插件应用，所以只能使用： npm run build

// var m = require('./demo-module');

var fs = require('fs');
// var m = require('demo-npm-publish');
// m.person(' galaxyw...')

fs.readFile('./DataSource-interfaceParamResponseEntities.json', 'utf-8', function (err, data) {
  let DATA_SOURCE = JSON.parse(data).RECORDS;
  let targetSource = { RECORDS: null }
  for (let item of DATA_SOURCE) {
    // if (item.interfaceParamEntities) { // interfaceParamResponseEntities
    if (item.interfaceParamResponseEntities) {
      let interfaceParamResponseEntities = JSON.parse(item.interfaceParamResponseEntities);
      for ( let value of interfaceParamResponseEntities) {
        // value
        value[`division`] = '@@@317hu@@@';
        
      }
      item.interfaceParamResponseEntities = interfaceParamResponseEntities;
    } else {
      item.interfaceParamResponseEntities = { 'division': '@@@317hu@@@' }
    }
  }
  // console.log('DATA_SOURCE->', JSON.stringify(DATA_SOURCE));
  targetSource.RECORDS = DATA_SOURCE;
  // fs.writeFileSync("./DATA_SOURCE_TRANSITION-2.json", JSON.stringify(targetSource));
  fs.writeFileSync("./DATA_SOURCE-interfaceParamResponseEntities.json", JSON.stringify(targetSource));
});
