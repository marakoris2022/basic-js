const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let splitNumber = String(n).split('');
  let arrOfNumbers = [];
  splitNumber.forEach ( (el, index) => {
    let tempNum = [];
    splitNumber.forEach ( (aEl, aIndex) => {
      if (index != aIndex) {
        tempNum.push(aEl);
      }
    })
    arrOfNumbers.push(parseInt(tempNum.join('')))
  })
  return Math.max(...arrOfNumbers)
}

// console.log(deleteDigit(152));

module.exports = {
  deleteDigit
};
