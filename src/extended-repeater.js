const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

// let str = 'STRING'
// let repOpt = { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00'}

function repeater(str, options) {
  let mainStr = String(str);
  if (String(options.addition) == "false") { options.addition = 'false'}
  if (String(options.addition) == "null") { options.addition = 'null'}
  let mainAddit = options.addition ? String(options.addition) : "";

  if (options.separator == '' || typeof options.separator == "undefined") { options.separator = '+'}
  if (options.additionSeparator == '' || typeof options.additionSeparator == "undefined") { options.additionSeparator = '|'}

  if (options.additionRepeatTimes > 0) {
    let i = options.additionRepeatTimes - 1;
    while (i > 0) {
      mainAddit += options.additionSeparator + options.addition
      i -= 1;
    }
    mainStr += mainAddit;
  } else if (mainAddit == "") {
    mainStr += mainAddit;
  } else if (mainAddit != "") {
    mainStr += mainAddit;

  }

  let endStr = mainStr;
  
  if (options.repeatTimes > 0) {
    let i = options.repeatTimes - 1;
    while (i > 0) {
      endStr += options.separator + mainStr
      i -= 1;
    }
  }

  return endStr
}

// console.log(repeater(str, repOpt));

module.exports = {
  repeater
};
