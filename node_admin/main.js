'use strict'

// 引入http模块
const http = require('http');
const router = require('./router');
const {host} = require('./config');
// 创建服务
const serve = http.createServer(router);
// 监听端口
serve.listen(host, ()=>{
  console.log('服务器启动 localhost:' + host);
})