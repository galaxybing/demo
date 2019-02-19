var net = require("net");

var client = net.connect({port: 8124}, function(){
  console.log("客户端连接成功：");
  client.write("触发另一端的data事件->");// \r\n
});

client.on("data", function(d){
  console.log(d.toString());
  client.end();
});
client.on("end", function(){
  console.log("客户端断开。")
});

// 客户端连接成功：
// 研发中心
// 
// 大伙好～
// 客户端断开。
