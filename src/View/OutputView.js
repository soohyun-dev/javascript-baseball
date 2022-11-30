const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, UNIT } = require("../utils/constant");

const OutputView = {
  gameStart() {
    Console.print(MESSAGE.START);
  },

  printResult(strikeCnt, ballCnt) {
    if (strikeCnt > 0 && ballCnt > 0)
      Console.print(`${ballCnt}${UNIT.BALL} ${strikeCnt}${UNIT.STRIKE}`);
    else if (strikeCnt > 0) Console.print(`${strikeCnt}${UNIT.STRIKE}`);
    else if (ballCnt > 0) Console.print(`${ballCnt}${UNIT.BALL}`);
    else Console.print(UNIT.NOTHING);
  },

  printEnd() {
    Console.print(MESSAGE.CLEAR);
  },

  printExit() {
    Console.print(MESSAGE.EXIT);
    Console.close();
  },
};

module.exports = OutputView;
