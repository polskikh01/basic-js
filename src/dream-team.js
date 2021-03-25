const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const result = []

  if (!Array.isArray(members)) {
    return false
  }

  for(let name of members) {
    if(typeof name === 'string') {
      result.push(name.trim().split('')[0])
    }
  }

  return result.map((e) => e.toUpperCase()).sort().join('');
};
