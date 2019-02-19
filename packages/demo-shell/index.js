const chd_process = require('child_process');

function run_cmd(cmd, args, callback, options) {
  const spawn = chd_process.spawn;
  const child = spawn(cmd, args, options);
  let result = "";
 
  child.stdout.on('data', (buffer) => {
    result += buffer.toString()
  });
  child.stdout.on('end', () => {
    callback(result)
  });
}

run_cmd('sh', ['./deploy.sh', 'galaxyw', 'bing'], (res) => {
  console.log('res->\n', res);

});