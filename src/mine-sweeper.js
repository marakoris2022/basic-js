const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

// matrix = [
//    [true, false, false],
//    [false, true, false],
//    [false, false, false]
//   ]

function minesweeper(matrixData) {
  const matrix = matrixData;
  const arrClone = [];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let ii = 0; ii < matrix[0].length; ii++) {
      matrix[i][ii] ? matrix[i][ii] = 1 : matrix[i][ii] = 0
    }
  }
  
  matrix.forEach( (el, i) => {
    arrClone[i] = [];
    el.forEach(elEc => {
      arrClone[i].push(0);
    })
  })
  
  for (let i = 0; i < matrix.length; i++) {
    for (let ii = 0; ii < matrix[0].length; ii++) {

      for (let ich = -1; ich < 2; ich++) {
        for (let iich = -1; iich < 2; iich++) {

          if (i + ich > -1 && ii+iich > -1 && i + ich < matrix.length && ii + iich < matrix[0].length) {
            // console.log(
            //   `check - matrix[${i + ich}][${ii + iich}] - 
            //   arrClone[${i}][${ii}] 
            //   - value: ${matrix[i+ich][ii+iich]}
            //   - Up - ${matrix[i + ich][ii + iich] != 0 ? 'yes' : 'no'}
            //   `);
            if (matrix[i + ich][ii + iich] != 0) {
              if (ich == 0 && iich == 0) {
                // console.log('skip');
              } else {
                arrClone[i][ii] += 1;

              }
            }
          } 
          
        }
      }

    }
  }
  
  return arrClone;
}

// console.log(minesweeper(matrix));

module.exports = {
  minesweeper
};
