'use strict'

var http = require('http');

var app = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world!\n');
}).listen(8080, '0.0.0.0');

console.log('server on port 8080');