'use strict'

const motionless = require('../../config/static.js');
const relativePath = require('../../config/path.js');
const path = require('path');
const fs = require('fs');
// 处理静态文件
function processStatic (req, res) {
  console.log(`这里是静态文件处理`, req.url);
  // 静态文件的url
  const url = req.url;
  // 判断静态文件的类型
  const staticKey = req.url.lastIndexOf('.') > -1 ?  req.url.slice(req.url.lastIndexOf('.') + 1): 'html'
  // 类型映射的contentType
  const contentType = motionless[staticKey]
  // 静态文件的根目录文件
  let filePath = '';
  // 访问的是根目录的
  if(url === '/' || url === '') {
    filePath = path.join(__dirname, '../../view/index.html')
  }else {
    // 文件路径
    filePath = path.join(__dirname, relativePath[staticKey] + url)
  }
  // 读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 判断查找html文件出错
      if (staticKey === 'html') {
        // html直接跳到404页面
        res.writeHead(404, {
          'content-type': 'text/html;charset=utf-8'
        })
        res.end('<h1>404 Not Found</h1>')
        return
      }else {
        // 错误抛出
        throw err;
      }
    }
    res.writeHead(200, {
      'content-Type': contentType
    });
    res.end(data);
  });
}

// 暴露文件
module.exports = processStatic
