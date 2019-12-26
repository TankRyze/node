window.onload = function(){
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', function(e) {
    e = e || event
    console.log(e.target)
    alert('欢迎，欢迎')
  })
}