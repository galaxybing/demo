var foo = require('./class');
// 1）模块导出的是 module.exports，而不是 exports
// 2）exports是引用 module.exports 的值，module.exports 被改变的时候，exports不会被改变

console.log('foo->', foo)
