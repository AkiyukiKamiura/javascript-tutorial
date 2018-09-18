window.onload = function(){
  var cnt = 0;
  document.getElementById('addBtn').addEventListener('click', function(){
    var div = document.createElement('div');
    div.innerHTML = '新しく生成された要素 (' + ++cnt + '個目)';
    div.id = 'new-element-' + cnt;

    var target = document.getElementById('target');
    target.appendChild(div);
  }, false);

  // document.body.addEventListener('mousemove', function(evt){
  //   console.log('x: ' + evt.pageX + ', y: ' + evt.pageY );
  // }, false);
};
