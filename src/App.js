const MissionUtils = require("@woowacourse/mission-utils");

const { Random, Console } = MissionUtils;

class App {
  constructor() {
    this.answer = [];
    this.userInput = "";
  }

  getCnt(includeOfNum) {
    let ballCnt = 0;
    let strikeCnt = 0;
    [...this.userInput].forEach((num, idx) => {
      if (+num !== this.answer[idx] && includeOfNum[num]) {
        ballCnt += 1;
      }
      if (+num === this.answer[idx]) {
        strikeCnt += 1;
      }
    });

    return [ballCnt, strikeCnt];
  }

  createResult() {
    const includeOfNum = Array.from({ length: 10 }).fill(false);
    let result = "";

    this.answer.forEach((num) => {
      includeOfNum[num] = true;
    });

    const [ball, strike] = this.getCnt(includeOfNum);

    if (ball === 0 && strike === 0) result = "낫싱";
    if (ball > 0) result += `${ball}볼`;
    if (ball > 0 && strike > 0) result += " ";
    if (strike > 0) result += `${strike}스트라이크`;

    Console.print(result);
    if (result === "3스트라이크") {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.restartQuestion();
    } else this.getUserInput();
  }

  checkPlayingNum(inputNum, allowed) {
    if (inputNum.length !== 3 || inputNum.includes(0)) {
      return false;
    }
    [...inputNum].forEach((str) => {
      allowed = !isNaN(str) && allowed;
    });
    return allowed;
  }

  checkException(inputNum, checkStyle) {
    if (checkStyle === "playingInput") {
      return this.checkPlayingNum(inputNum, true);
    } else if (checkStyle === "restartInput") {
      return inputNum === "1" || inputNum === "2";
    }
  }

  restartQuestion() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        if (!this.checkException(input, "restartInput")) {
          throw new Error(
            "잘못된 문자를 입력하였습니다. 프로그램을 종료합니다."
          );
        }
        if (input === "1") this.startGame();
        Console.print("게임 종료");
        Console.close();
      }
    );
  }

  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!this.checkException(input, "playingInput")) {
        throw new Error("잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.");
      }
      this.userInput = input;
      this.createResult();
    });
  }

  createAnswer() {
    this.answer = [];
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  startGame() {
    this.createAnswer();
    this.getUserInput();
    this.restartQuestion();
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
