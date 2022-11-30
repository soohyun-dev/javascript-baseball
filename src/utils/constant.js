const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  CLEAR: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  SELECT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  EXIT: "게임 종료.",
};

const CHECK = {
  ALLOW: true,
  NOT_ALLOW: false,
};

const UNIT = {
  ALLOW_NUMBER: /[1-9]/,
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
  RESTART: "1",
  EXIT: "2",
  CNT: 1,
  END: 3,
  GAMENUMBER_LENGTH: 3,
};

const SELECT = {
  RESTART: true,
  EXIT: false,
};

const ERROR = {
  GAME_NUMBER: "1 ~ 9 올바른 숫자 3개를 입력하셔야합니다. 게임을 종료합니다.",
  RESTART:
    "1.재시작 2.게임 종료 두 번호 중 하나만 입력하셔야합니다. 게임을 종료합니다.",
};

module.exports = { MESSAGE, CHECK, UNIT, SELECT, ERROR };
