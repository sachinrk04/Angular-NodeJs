const http = require('http');

const server = http.createServer((req, res) => {
  res.end('This is my first request')
});

server.listen(process.env.PORT || 8090);
