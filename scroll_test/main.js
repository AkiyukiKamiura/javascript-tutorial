var eventDispatcher = {
  dispatch: function(type, data){
    var handlers = this._handlers || (this._handlers = {});
    var handler = handlers[type] || (handlers[type] = []);
    for (var i = 0, l = handler.length; i < l; i++){
      handler[i](data);
    }
  },

  addListener: function(type, callback){
    var handlers = this._handlers || (this._handlers = {});
    var handler = handlers[type] || (handlers[type] = []);
    handler.push(callback);
  }
}

eventDispatcher.addListener('testEvent', function(ms){
  alert(ms + 'ms経過!');
});

var startTime = Date.now();
setTimeout(function(){
  var time = Date.now() - startTime;
  eventDispatcher.dispatch('testEvent', time);
}, 5000)

var c = 0;
var cd = 1;

window.addEventListener('scroll', function(){
  c += ~~(Math.random()*10)*cd

  if (c > 255){
    c = 255;
    cd = -1;
  }
  if (c < 0){
    c = 0;
    cd = 1;
  }
  document.body.style.backgroundColor = 'rgb(' + c + ',' + c + ',' + c + ')';
}, false);
