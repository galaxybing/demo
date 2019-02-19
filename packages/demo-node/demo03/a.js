exports.x = 'a1';

var userName = "a has";
export { userName };

import {es6Val as item, x} from './b.js'; // import 引用 b.js 以后，b.js 里面并不能得到上面导出的 x 属性
console.log('item->', item, ' x->', x);

// require('./b.js');                          // require 引用 b.js 以后，b.js 里面会返回模块的不完整的 a.js 导出版本
console.log('run...a.js->', require('./b.js').x);
exports.x = 'a2';

/*
b.js  a1 // import 引用 b.js 以后，为 undefined
a.js  b2

第二次加载a.js和b.js时，会直接从缓存读取exports属性，所以a.js和b.js内部的console.log语句都不会执行了。

*/
