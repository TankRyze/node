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
  var 
  // 定义当前版本
  // jq中是节省查找内存地址时间，提高效率
  // 这里置为了装逼
  core_version = '0.0.1',
  // jq的构造函数
  jQuery = function (selector, context) {
    // 没有使用new 运算符将jQuery 显示的实例化，而是直接调用其函数
    //  jQuery.fn是jQuery的原型
    // jQuery.fn.init.prototype = jQuery.fn
    // 所以通过这种方法生成的实例 this 所指向的 仍然是是jQuery 的原型
    return new jQuery.fn.init(selector, context)
  }
  jQuery.fn  = jQuery.prototype = {
    // 当前版本
    jquery: core_version,
    // 构造函数
    constructor: jQuery,
    // 初始化方法
    // 我们是通过new jQuery.fn.init()构造的jQuery对象，所有这个方法称作：jQuery对象构造器，
    init: function (selector, context, rootjQuery) {

      // 例如： $(''), $(null), $(undefined), $(false)
      // 如果传入参数为空直接返回this
      // 处理，'', null, undefined, fasle 返回this，增加程序的健壮性
      if (!selector) return this;
      
      // 选择器传入的是字符串
      // 处理字符串
      if (typeof selector === 'string') {

      }
    }
  };
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