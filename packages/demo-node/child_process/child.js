process.on('message', function (m, server) {
  if (m === 'server') {
    server.on('connection', function(socket) {
      socket.end('由子线程处理...\n')
    })
  }
})