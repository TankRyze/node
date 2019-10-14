//页面被加载后获取数据
$(function(){
  //为了获取之前的数据发送请求
  $.ajax({
    url : '/getMsg',
    type : 'POST',
    success : function (data){
        $('#show').text(data);
    }
  });
  //点击发送发送的请求
  $('#btn').on('click',function(){
    // 获取到输入框的内容
    var text = $('#text').val();
    // 显示出来
    // 发送给后台
    $.ajax({
      url : '/val',
      type : 'POST',
      data :text ,
      success : function(data){
        // 将返回的数据显示出来
        $('#show').text(data);
      }
    });
    // 清空输入框内容
    $('#text').val('');
  });
})
