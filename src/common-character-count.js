const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let aString, bString;
  let count = 0;
  let usedIndex = [];
  let checking = true;

  if (s1.split('').length > s2.split('').length) {
    aString = s1.split('');
    bString = s2.split('');
  } else {
    aString = s2.split('');
    bString = s1.split('');
  }

  aString.forEach ( (char) => {
    checking = true;
    bString.forEach ( (charB, index) => {
      if (char == charB && checking) {
        if (!usedIndex.filter((e) => e == index).length > 0) {
          usedIndex.push(index);
          count += 1;
          checking = false;
        }
      }
    })
  })
  return count;
}

module.exports = {
  getCommonCharacterCount
};
