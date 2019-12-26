'use strict'
// 处理静态文件
const processStatic = require('./processStatic');

function router(req, res) {
  // 获取url
  const url = req.url;
  console.log(`url`, url);
  // 判断是否是请求静态文件
  // 判断依据，第一个路径是否是api如果是api那么就是普通的请求，否则就是请求静态文件
  // 将url转化为数组，并获取第2项
  const isApi = url.split('/')[1]
  // 如果存在并且值为api那就是普通请求
  if (isApi && isApi.toLowerCase() === 'api') {
    
  }else {
    // 处理静态文件
    processStatic(req, res)
  }
  
  // 普通请求的接口
}
module.exports = router