/*
 * nodejs环境中创建一个子进程：
 *   在这个子进程中使用系统命令行运行python脚本，如python main.py arg0 arg1实现对python脚本的调用
 *
 * Child Process 模块：提供调用子进程以及传递参数给子进程的方法：
 *   https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html
 *
 * nodejs 获取 python 计算结果方式：
 *   在python脚本中对计算结果进行打印，然后在nodejs的脚本中对这个打印的字符串进行解析
 */
        
const chd_process = require('child_process');
chd_process.exec('python main.py ' + 'argv-galaxyw', (err, stdout, stderr) => {
  if (err) console.log('stderr: ', err);
  if (stdout) console.log('stdout: \n', stdout);
  /* 实现将python脚本输出的json字符串转换为json对象的操作： */
  // const astr = stdout.split('\r\n').join(''); // delete the \r\n
  // const obj = JSON.parse(astr);
  console.log('...end')
});
