'use strict'

var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./cert/2656092_jscoder.top.key'),
  cert: fs.readFileSync('./cert/2656092_jscoder.top.pem')
}

// options 就是需要引入的证书
var app = https.createServer(options, function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello https!\n');
}).listen(4433, '0.0.0.0');