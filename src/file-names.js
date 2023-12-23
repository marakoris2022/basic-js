const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

// let name = ["file", "file", "image", "file(1)", "file"];

function renameFiles(names) {
  let flag = true;
  let index = 0;
  let counter = 1;

  while(flag) {
    flag = false;
    let elCheck = names[index]
    names = names.map ((el, i) => {
      if (elCheck == el && index != i) {
        let newEl = `${el}(${counter})`
        counter += 1;
        flag = true;
        return newEl
      } else {
        return el;
      }
    })
    if (flag) index += 1;
    if (index == names.length) {flag = false}
    counter = 1;
    // console.log(names);
  }


  return names
}

// console.log(renameFiles(name));

module.exports = {
  renameFiles
};
