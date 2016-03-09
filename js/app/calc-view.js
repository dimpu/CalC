function CalcView(model,btnView){
  this.btnView = btnView;
  this.$$model = model;
  this.$html = '<div class="calc-wrap"><div class="inner">'+this.$$model.$$model+'</div></div>';
  this.render();
}

CalcView.prototype.constructor = CalcView;

/**
 * Render Base Calc
 */
CalcView.prototype.render = function(el){
  el = el || 'body';
  var html = this.toHTML(this.$html);
  html.querySelector('.inner').appendChild(this.btnView.$$view.$wrap);
  document.querySelector(el).appendChild(html);
};

CalcView.prototype.toHTML = function(html){
  var div = document.createElement('div');
  div.innerHTML = html;
  return div;
};
