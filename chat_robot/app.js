//严格模式
'use strict';
//http接口
const http = require('http');
//fs接口
const fs = require('fs');
//地址接口
const path = require('path');
//请求过来
let server = http.createServer((req, res) => {
  // 处理请求
  //请求写的是/ 或者是index.html就是返回给页面
  if (req.url == '/' || req.url == '/index.html') {
    //读取文件
    fs.readFile('./index.html', (err, data) => {
      //如果错误，直接抛出
      if (err) throw err;
      //写响应头写入编码格式
      res.writeHead(200, {
        'content-Type': 'text/html;charset=utf-8'
      });
      //结束响应并传回数据
      res.end(data); // end 和 write函数中只能是字符串或者是二进制数据；
    });
  } else if (req.url.indexOf('static') > -1) {
    // 匹配静态文件
    fs.readFile(path.join(__dirname, req.url), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        'content-Type': 'text/css;charset=utf-8'
      });
      res.end(data);
    });
  } else if (req.url == '/node_modules/jquery/dist/jquery.min.js') {
    // 这个文件不再静态文件里面所以需要单独匹配
    fs.readFile(path.join(__dirname, req.url), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        'content-Type': 'application/x-javascript'
      });
      res.end(data);
    });
  } else if (req.url == '/getMsg') {
    const file = path.join(__dirname, 'static/json/record.json')
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {

      } else {
        data = JSON.parse(data)
        res.write(JSON.stringify(data))
      }
      res.end()
    })
  } else if (req.url == '/sendMsg') {
    //拼接过来的数据
    let totalData = '';
    //获取数据请求
    req.on('data', (data) => {
      let jsstr = JSON.stringify(data)
      let jsondata = JSON.parse(jsstr)

      let buf = Buffer.from(jsondata);

      totalData = buf.toString();
    });
    req.on('end', () => {
      // 获取文件地址 //文件路径，__dirname为当前运行js文件的目录
      var file = path.join(__dirname, 'static/json/talk.json')
      fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
          res.end('我出问题了')
        } else {
          let json = JSON.parse(data)
          let resmsg = json[totalData]
          console.log(resmsg);
          res.writeHead(200, {
            'content-Type': 'text/plain;charset=utf-8'
          });
          if (resmsg) {
            res.write(resmsg)
          } else {
            //写响应头写入编码格式
            res.write('不知道你说啥。')
          }
          res.end()
        }
      })

    });
  } else {
    res.end();
  }
});
//监测端口
server.listen(8080, () => {
  console.log('服务器启动 localhost:8080');
});
