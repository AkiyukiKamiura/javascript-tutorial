function Popwindow(conf){
  this._init(conf);
  this._show();
}

Popwindow.prototype = {
  constructor: Popwindow,

  _init: function(conf){
    var that = this;
    var yesBtn = this.el.querySelector('.popwindow-button-yes');
    yesBtn.addEventListener('click', function(e){
      that._yesHandler(e)
    }, false);

    var noBtn = this.el.querySelector('.popwindow-button-no');
    if (conf.buttonType == Popwindow.buttonType.YESNO){
      noBtn.addEventListener('click', function(e){
        that._noHandler(e)
      }, false);
    } else {
      noBtn.style.display = 'none';
    }
  },

  _buildWindow: function(titleText, contentText){
    var container = document.createElement('div');

    var templateElement = document.getElementById('template-buttons');
    container.innerHTML = templateElement.innerHTML;

    var title = container.querySelector('.popwindow-title');
    var content = container.querySelector('.popwindow-content');

    title.innerHTML = titleText;
    content.innerHTML = contentText;

    return container;
  },

  _show: function(){

  },

  _yes: function(){
    this.trigger('yes');
    this.close();
  },

  _no: function(){
    this.trigger('no');
    this.close();
  },

  _yesHandler: function(){
    this._yes();
  },

  _noHandler: function(){
    this._no();
  },

  moveTo: function(x, y){

  },

  close: function(){
    if (this.modal){
      this.modal.close()
    }
    this.el.parentNode.removeChild(this.el);
    this.trigger('close');
  },

  // 自作イベントの登録, 削除, 実行処理
  trigger: function(type, data){
    var handlers = this._handlers || (this._handers = {});
    var handler = handlers[type] || (handlers[type] = []);

    for (var i = 0, l = handler.length; i < l; i++){
      handler[i](data);
    }
  },
  addListener: function(type, callback){
    var handlers = this._handlers || (this._handers = {});
    var handler = handlers[type] || (handlers[type] = []);
    handler.push(callback);
  },
  removeListener: function(type, callback){
    var handlers = this._handlers || (this._handers = {});
    var handler = handlers[type] || (handlers[type] = []);
    var len = handler.length;
    while (len--){
      if (handler[len] === callback){
        handler.splice(len, 1);
        break;
      }
    }
  }
};
