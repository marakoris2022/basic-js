const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


const arreyCh = [1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]];

// class DepthCalculator {
//   constructor() {
//     this.counter = 1;
//   }
//   calculateDepth(arr) {
//     let check = false;
//     arr.forEach( el => {
//       if (Array.isArray(el)) check = true;
//     })
//     if (!check) {
//       return this.counter + 1;
//     } else {
//       console.log(this.counter);
//       this.counter += 1;
//       this.calculateDepth(arr.flat(1))
//     }
//   }
// }
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    let flag = true;
    let ourArr = arr;
    // let newArr = ourArr;
    while (flag) {
      flag = false;
      ourArr.forEach(el => {
        if (Array.isArray(el)) flag = true
      })
      if (flag) {
        ourArr = ourArr.flat(1);
        counter += 1;
      }
      console.log(ourArr);
    }
    return counter;
  }
}

const depthCalc = new DepthCalculator;
console.log(depthCalc.calculateDepth(arreyCh));;

module.exports = {
  DepthCalculator
};
