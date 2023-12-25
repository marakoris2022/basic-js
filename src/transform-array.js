const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

  if (Array.isArray(arr) && arr.length == 0) return []

  let newArr = arr.map(el => el)
  newArr = newArr.map ((el,i) => {
    if (newArr[i+1] == '--discard-prev') {
      return 'del_me'
    } else if (el == '--double-next') {
      if (typeof newArr[i+1] == 'number') {
        return newArr[i+1]
      } else {
        return 'del_me'
      }
    } else if (el == '--double-prev') {
      if (typeof newArr[i-1] == 'number') {
        return newArr[i-1]
      } else {
        return 'del_me'
      }
    } else if (el == '--discard-next') {
      if (typeof newArr[i+1] == 'number') {
        newArr[i+1] = 'del_me'
        return 'del_me'
      } else {
        return 'del_me'
      }
    } else if (el == '--discard-prev') {
        return 'del_me'
    }
    return el
  })
  console.log(newArr);
  return newArr.filter(el => el != 'del_me')
}

// console.log(transform([1, 2, '--discard-next', 5, 1337, '--discard-prev', 4, 5]));

module.exports = {
  transform
};
