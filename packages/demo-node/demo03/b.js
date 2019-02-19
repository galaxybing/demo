exports.x = 'b1';
var es6Val = "galaxyw";
export { es6Val };

var a = require('./a.js');
console.log('run...b.js->', a.x,' from a.js');

exports.x = 'b2';
