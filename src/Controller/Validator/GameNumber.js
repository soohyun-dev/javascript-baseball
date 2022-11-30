const { CHECK, UNIT, ERROR } = require("../../utils/constant");

class GameNumber {
  #input;

  constructor(input) {
    this.#input = input;
  }

  check() {
    if (this.isAllowLength() || !this.isAllowString() || this.isDuplicate()) {
      throw new Error(ERROR.GAME_NUMBER);
    }
    return CHECK.ALLOW;
  }

  isAllowLength() {
    return this.#input.length !== UNIT.GAMENUMBER_LENGTH;
  }

  isAllowString() {
    let allow = CHECK.ALLOW;
    this.#input.split("").forEach((target) => {
      if (!UNIT.ALLOW_NUMBER.test(target)) {
        allow = CHECK.NOT_ALLOW;
      }
    });
    return allow;
  }

  isDuplicate() {
    return [...new Set(this.#input)].length !== this.#input.length;
  }
}

module.exports = GameNumber;
