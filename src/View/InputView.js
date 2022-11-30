const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../utils/constant");

const InputView = {
  inputGameNumber(input) {
    Console.readLine(MESSAGE.INPUT, input);
  },

  inputRestart(input) {
    Console.readLine(MESSAGE.SELECT, input);
  },
};

module.exports = InputView;
