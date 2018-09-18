function reset(){
  var reset_target = document.getElementById('text');
  if (reset_target.value === ""){
    alert('テキストはすでにリセット済みです');
  } else {
    reset_target.value = '';
  }
}

window.onload = function(){
  var btn = document.getElementById('reset');
  btn.addEventListener('click', function(){
    reset();
  }, false);
};
