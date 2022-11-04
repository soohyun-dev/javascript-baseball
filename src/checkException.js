function isAllowed(nowCheckStr, exception) {
  if (exception) return false;
  if (isNaN(nowCheckStr)) return false;
  return true;
}

function checkException(input) {
  let allowed = true;

  if (input.length !== 3) {
    return false;
  }
  String(input)
    .split("")
    .forEach((str) => {
      allowed = isAllowed(str, exception);
    });

  return allowed;
}

module.exports = checkException;
