define(['jquery.simple'], function ($) {
  'use strict';
  // 判断缓存中是否有token
  var token = localStorage.getItem('token')
  if (token) {
    // 如果token存在要发送请求验证token是否过期如果如果过期跳转登录页
  }else {
    // $.router.push('/login')
    window.location.pathname = '/login';
  }
  });