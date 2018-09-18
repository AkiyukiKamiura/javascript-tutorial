window.onload = function(){
  var contents = document.getElementById('contents');
  contents.innerHTML = '<ul>' +
    '<li>List item1</li>' +
    '<li>List item2</li>' +
    '<li>List item3</li>' +
    '</ul>';

  var li_element = document.createElement('li');
  li_element.innerHTML = 'List item4';
  var ul = document.querySelector('#contents > ul');
  ul.appendChild(li_element);

  var button = document.getElementById('btn');
  btn.addEventListener('mouseover', function(){
    var h1 = document.querySelector('.title');
    h1.style.borderBottom = 'solid 1px #999';
    h1.style.marginBottom = '40px';
    h1.style.padding = '10px';

    // クラス名を変更することでスタイルを適用するほうが賢い
    ul.className = 'information';
  }, false);
}
