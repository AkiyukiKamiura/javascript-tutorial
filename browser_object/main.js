window.onload = function(){
  lctbtn = document.getElementById('location');
  lctbtn.addEventListener('click', function(){
    console.log(location.href);
  }, false);

  wdwbtn = document.getElementById('window');
  wdwbtn.addEventListener('click', function(){
    console.log('innerWidth: ' + window.innerWidth + ', innerHeight: ' + window.innerHeight);
  }, false);
}
