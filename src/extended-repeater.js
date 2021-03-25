const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '';
  if (!options.separator) {
    options.separator = '+'
  };
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  };
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  };
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1
  };
  if (options.addition === undefined) {
    options.addition = ''
  };

  for (let i = 0; i < options.repeatTimes; i++) {
    res += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      res += options.addition;
      if (j < options.additionRepeatTimes - 1) {
        res += options.additionSeparator;
      }
    }
    if (i < options.repeatTimes - 1) {
      res += options.separator;
    }
  }

  return res;
};
  