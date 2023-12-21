const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

const domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ]

function getDNSStats(domains) {
  let splitDom = domains.map( el => {
    return el.split('.')
  })
  let addDot = splitDom.map( (el) => {
    return el.map( (nEl) => {
      return `.${nEl}`;
    }).reverse()
  })
  let data = []
  addDot.forEach( (el, index) => {
    el.forEach ((el, index) => {
      if(index > 0) {
        data.push(data[data.length-1]+el)
      } else {  
        data.push(el)
      }
    })
  })
  let dataTemp = [];
  let ourObject = {};
  data.forEach(el => {
    let counter = 0;
    let elFlag = false;
    dataTemp.forEach(elCh => {
      if(elCh == el) {elFlag = true};
    })
    if(!elFlag) {
      dataTemp.push(el)
      data.forEach(elc => {
        if (elc == el) counter += 1;
      })
      dataTemp.push(counter)
      ourObject[el] = counter;
    }
  })
  return ourObject
}

// console.log(getDNSStats(domains));

module.exports = {
  getDNSStats
};
