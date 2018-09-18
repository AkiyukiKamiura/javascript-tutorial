// マウスイベント, キーボードイベントがある
// onload イベント, scroll イベント

window.onload = function(){
  var target = document.getElementById('target');
  target.addEventListener('mouseover', function(){
    target.style.backgroundColor = 'red';
  }, false);
  target.addEventListener('mouseout', function(){
    target.style.backgroundColor = 'white';
  }, false);
}
