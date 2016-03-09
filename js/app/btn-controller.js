function BtnCtrl(model,view){
  this.$$model = model;
  this.$$view = view;
  this.callBack();
}

BtnCtrl.prototype.constructor = BtnCtrl;

BtnCtrl.prototype.callBack = function () {
  this.$$view.setOnClickCallBack(function(val){
    console.log("my" +val);
  });
};
