const { UNIT, SELECT } = require("../utils/constant");
const GenerateNumber = require("./GenerateNumber");

class BaseballGame {
  constructor() {
    this.generateNumber = new GenerateNumber();
    this.gameNumber = [];
  }

  makeNumber() {
    this.gameNumber = this.generateNumber.generate();
  }

  inspect(input) {
    const [strikeCnt, ballCnt] = this.countResult(input);
    const isEnd = this.checkEnd(strikeCnt);
    return [strikeCnt, ballCnt, isEnd];
  }

  countResult(input) {
    let [strikeCnt, ballCnt] = [0, 0];
    this.gameNumber.forEach((num, idx) => {
      if (+num === +input[idx]) strikeCnt += UNIT.CNT;
      else if (num !== input[idx] && [...String(input)].includes(String(num)))
        ballCnt += UNIT.CNT;
    });
    return [strikeCnt, ballCnt];
  }

  checkEnd(strikeCnt) {
    return strikeCnt === UNIT.END;
  }

  process(select) {
    if (select === UNIT.RESTART) return SELECT.RESTART;
    else if (select === UNIT.EXIT) return SELECT.EXIT;
  }
}

module.exports = BaseballGame;
