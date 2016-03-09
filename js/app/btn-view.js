function BtnView(model){
  this.$$model = model;
  this.$html = '<div class="btn-wrap"></div>';
  this.$$btns = [];
  this.render();
}
BtnView.prototype.constructor = BtnView;

BtnView.prototype.render = function () {
  var self = this;
  this.$wrap = self.toHTML(self.$html);

  this.$$model.$btns.forEach(function(btn){
      var button = document.createElement('button');
          button.value = btn;
          button.innerHTML = btn;
          button.addEventListener('click',function(){
            self.onBtnClick(this.value);
          });
          self.$wrap.appendChild(button);
          self.$$btns.push(button);
  });
  console.log(self.$wrap);
};
BtnView.prototype.toHTML = function(html){
  var div = document.createElement('div');
  div.innerHTML = html;
  return div;
};
BtnView.prototype.setOnClickCallBack = function (fn) {
   this.callbackFn = fn;
};

BtnView.prototype.onBtnClick = function (val) {
  this.callbackFn(val);
  return this;
};








/**
 * Closer in js
 */


// function a(){
//
// }
//
//
// function b(a){
//   var x = a;
//
//   x();
//
// }
//
// b();
