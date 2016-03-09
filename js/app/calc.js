function Calc(){
  new CalcCtrl(
        new CalcModel(),
        new CalcView(new CalcModel(),
          new BtnCtrl(new BtnModel(),new BtnView(new BtnModel()))
  ));
}

new Calc();
