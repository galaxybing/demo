var net = require("net");
var server = net.createServer();

server.on("connection", function(socket){
  socket.on("data", function(d){
    socket.write(d+"大伙好～");
  });
  socket.on("end", function(){
    console.log("连接断开。");
  });
  
  socket.write("欢迎来到伯仲信息技术有限公司，研发中心，前端架构组考察：\n")
});
server.listen(8124, function(){
  console.log("tcp 服务开始...")
});
