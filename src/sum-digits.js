const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let splitArr = String(n).split('');
  // console.log(splitArr);
  
  // return
  while(n>=10) {
    n = 0;
    splitArr.forEach( el => {
      n = n + parseInt(el)
    })
    if (n>=10) {
      splitArr = String(n).split('');
    }
  }
  return n
}

// console.log(getSumOfDigits(123));

module.exports = {
  getSumOfDigits
};
