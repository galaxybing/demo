import {bar} from "./b.js";
export function foo(){
    bar();
    // 循环引用方法后面的执行，整体靠后
    console.log("a.js 执行完毕");
};
foo();

/* 模块的循环加载，即A加载B，B又加载A；则B将加载A的不完整版本
b.js:  0.9955607747052799
b.js:  0.21262484312873964
a.js 执行完毕
a.js 执行完毕
*/

// 问题一，为什么 a.js 的最后输出都靠后
//-> 留存依赖引用的指针
