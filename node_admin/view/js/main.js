require.config({
  // 路径默认与main.js在同一个目录
  // 基目录
  baseUrl: "js/lib",
  // 基目录的相对路径
  paths: {
  　"jquery": "jquery.simple",
  },
  shim: {
    "jquery.simple": {
      // 依赖的库
      // deps: ['underscore', 'jquery'],
      // 暴露的名字
      exports: '$'
    }
  }
});
require(['jquery.simple'], function ($) {
console.log($)
})