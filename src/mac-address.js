const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  function ishex(c) {
    return ('0123456789ABCDEFabcdefABCDEF'.indexOf(c) > -1);
    }
  
  let number = n.split("");
  let filtNumber = [];
  number.forEach (dig => {
    if (dig != '-') filtNumber.push(dig);
  })
  let check = true;
  filtNumber.forEach(dig => {
    if (!ishex(dig)) check = false;
  })

  console.log(filtNumber);

  return check
}

// console.log(isMAC48Address('00-1B-63-84-45-E6'));

module.exports = {
  isMAC48Address
};
