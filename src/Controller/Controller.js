const BaseballGame = require("../Model/BaseBallGame");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const GameNumber = require("./Validator/GameNumber");
const Restart = require("./Validator/Restart");

class Controller {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  start() {
    OutputView.gameStart();
    this.orderMakeNumber();
  }

  orderMakeNumber() {
    this.baseballGame.makeNumber();
    this.orderInputNumber();
  }

  orderInputNumber() {
    InputView.inputGameNumber(this.isAllowNumber.bind(this));
  }

  isAllowNumber(input) {
    this.gameNumber = new GameNumber(input);
    if (this.gameNumber.check()) this.orderInspectNumber(input);
  }

  orderInspectNumber(input) {
    const [strikeCnt, ballCnt, isEnd] = this.baseballGame.inspect(input);
    OutputView.printResult(strikeCnt, ballCnt);
    if (isEnd) this.orderEnd();
    else this.orderInputNumber();
  }

  orderEnd() {
    OutputView.printEnd();
    this.orderInputRestart();
  }

  orderInputRestart() {
    InputView.inputRestart(this.isAllowSelect.bind(this));
  }

  isAllowSelect(input) {
    this.restart = new Restart(input);
    if (this.restart.check()) this.processSelect(input);
  }

  processSelect(input) {
    if (this.baseballGame.process(input)) this.orderMakeNumber();
    else OutputView.printExit();
  }
}

module.exports = Controller;
