/**
 * 自己手写的jq主要是练习原生js的封装
 * 命名为jquery.simple
 * 作者: 刘晓北
 * 邮箱: 15732451723@163.com
 */
(function (global, factory){
  factory(global)
}(typeof window !== 'undefined' ? window : this,function(window,noGlobal){
  /**
   * 
   * @param {选择器} selector 
   * @param {上下文} context 
   */
  // jq的构造函数
  var jQuery = function (selector, context) {
    // 返回一个jquery的fn的初始化的方法init
    return new jQuery.fn.init(selector, context)
  }
  jQuery.fn  = jQuery.prototype = {};
  // 核心方法
	// 回调系统
	// 异步队列
	// 数据缓存
	// 队列操作
	// 选择器引
	// 属性操作
	// 节点遍历
	// 文档处理
	// 样式操作
	// 属性操作
	// 事件体系
	// AJAX交互
	// 动画引擎
	return jQuery;
}))

// jQuery.each( [ "get", "post" ], function( i, method ) {
//   jQuery[ method ] = function( url, data, callback, type ) {
//   // Shift arguments if data argument was omitted
//   if ( jQuery.isFunction( data ) ) {
//     type     = type || callback;
//     callback = data;
//     data     = undefined;
//   }
//   return jQuery.ajax({
//     url: url,
//     type: method,
//     dataType: type,
//     data: data,
//     success: callback
//   });
// };
// });