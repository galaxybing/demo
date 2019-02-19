var Foo = require('./foo');// 可以 node ./main.js；也可以通过 npm run ...
//import Foo from "./foo";// 需要 babel-preset-es2015 插件应用，所以只能使用： npm run build
var foo = new Foo();
foo.req('http://zj.qq.com');
console.log(foo.re);// 输出，同步加载时的字符串消息：'foo.js 加载完成，并被 exports 导出了'
