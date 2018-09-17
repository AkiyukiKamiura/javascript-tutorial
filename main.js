function reset(){
  var reset_target = document.getElementById('text');
  reset_target.value = '';
}

window.onload = function(){
  var btn = document.getElementById('reset');
  btn.addEventListener('click', function(){
    reset();
  }, false);
};
