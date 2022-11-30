const MissionUtils = require("@woowacourse/mission-utils");
const { UNIT } = require("../utils/constant");

class GenerateNumber {
  generate() {
    const computer = [];
    while (computer.length < UNIT.GAMENUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

module.exports = GenerateNumber;
