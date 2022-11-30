const { CHECK, UNIT, ERROR } = require("../../utils/constant");

class Restart {
  #input;

  constructor(input) {
    this.#input = input;
  }

  check() {
    if (!this.isAllowNumber()) throw new Error(ERROR.RESTART);
    return CHECK.ALLOW;
  }

  isAllowNumber() {
    return this.#input === UNIT.RESTART || this.#input === UNIT.EXIT;
  }
}

module.exports = Restart;
