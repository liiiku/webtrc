'use strict'

var http = require('http');
var https = require('https');
var fs = require('fs');

var express = require('express');
var serveIndex = require('serve-index');

var app = express();
app.use(serveIndex('./public'))
app.use(express.static('./public')); // 发布静态目录

var options = {
  key: fs.readFileSync('./cert/2656092_jscoder.top.key'),
  cert: fs.readFileSync('./cert/2656092_jscoder.top.pem')
}

// http server
var http_server = http.createServer(app);
http_server.listen(8080, '0.0.0.0');

// https sever
var https_server = https.createServer(options, app);
https_server.listen(4433, '0.0.0.0');