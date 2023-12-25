const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

// let arr = [4, 2, 9, 11, 2, 16]

function sortByHeight(arr) {
  let cleanArr = arr.filter(el => el != -1).sort(function(a, b){return a - b})

  let counter = 0;
  const newArr = [];
  arr.forEach(el => {
    let item;
    if (el == -1) {
      newArr.push(el)
    } else {
      item = cleanArr[counter];
      counter += 1;
      newArr.push(item)
    }
  })
  
  return newArr;
}

// console.log(sortByHeight(arr));

module.exports = {
  sortByHeight
};
