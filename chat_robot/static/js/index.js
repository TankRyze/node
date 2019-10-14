//页面被加载后获取数据
$(function () {
  // 创建li 如果type = 1 那就是发送 否则就是接受
  function createLi(msg, type) {
    if (type == 1) {
      return `
      <li class="sendMsg">
        <!-- 发送的内容 -->
        <p class="s_content">${msg}</p>
        <!-- 头像 -->
        <img class="headImg" src="./static/img/send.png" alt="headImg">
      </li>
      `
    } else {
      return `
      <li class="receiveMsg">
        <!-- 头像 -->
        <img class="headImg" src="./static/img/receive.png" alt="headImg">
        <!-- 接收的内容 -->
        <p class="r_content">${msg}</p>
      </li>
      `
    }

  }
  //为了获取之前的数据发送请求
  $.ajax({
    url: '/getMsg',
    type: 'POST',
    success: function (data) {
      const arr = JSON.parse(data)
      let strHtml = ''
      arr.forEach((item, index) => {
        strHtml += createLi(item.msg, item.id)
      });
      $('#msgBox').append(strHtml)
    }
  });
  //点击发送发送的请求
  $('#btn').on('click', function () {
    // 获取到输入框的内容
    var text = $('#text').val();
    $('#msgBox').append(createLi(text, 1))
    // 发送给后台
    $.ajax({
      url: '/sendMsg',
      type: 'POST',
      data: text,
      success: function (data) {
        // 将返回的数据显示出来
        $('#msgBox').append(createLi(data, 2))
      }
    });
    // 清空输入框内容
    $('#text').val('');
  });
})
