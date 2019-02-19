/*
 一个简单的NPM包left-pad，它的目的是实现左填充一个字符串，他的源码也总共只有11行
 
 如何看待 Azer Koçulu 删除了自己的所有 npm 库？
 https://www.zhihu.com/question/41694868
 
 var leftpad = require('./leftpad');
 console.log('leftpad->', leftpad('galaxyw', 9, 'bing'));
 */
module.exports = leftpad;
function leftpad (str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = ' ';
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}
