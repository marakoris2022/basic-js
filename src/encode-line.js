const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

// let str = '';


function encodeLine(str) {
  let split = str.split("");
  let counter = 0;
  let char = split[0];
  let encodedStr = '';
  split.forEach(el => {
    if (el != char) {
      if(counter > 1) {
        encodedStr += String(counter) + char;
      } else {
        encodedStr += char;
      }
      char = el;
      counter = 1;
    } else if (el == char) {
      counter += 1
    }
  })
  if(counter > 1) {
    encodedStr += String(counter) + char;
  } else {
    encodedStr += char;
  }
  if (encodedStr == 'undefined') encodedStr = '';
  return encodedStr;
}

// console.log(encodeLine(str));

module.exports = {
  encodeLine
};
