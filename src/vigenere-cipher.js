const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool;
  };

  encrypt(message, key) {
    if(typeof message === "undefined" || typeof key === "undefined") {
      throw new Error
    };

    let eStr = '';
    let count = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for(let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        eStr += String.fromCharCode(((message.charCodeAt(i) - 65 + key.charCodeAt(count % key.length) - 65) % 26) + 65);
        count++;
      } else {
        eStr += message[i];
      };
    };

    if (this.bool === undefined) {
      return eStr;
    } else {
      return eStr.split('').reverse().join('');
    };
  };

  decrypt(message, key) {
    if(typeof message === "undefined" || typeof key === "undefined") {
      throw Error
    };

    let eStr = '';
    let count = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for(let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        eStr += String.fromCharCode(((message.charCodeAt(i) + 26 - key.charCodeAt(count % key.length)) % 26) + 65);
        count++;
      } else {
        eStr += message[i];
      };
    };

    if (this.bool === undefined) {
      return eStr;
    } else {
      return eStr.split('').reverse().join('');
    };
  };
}

module.exports = VigenereCipheringMachine;
