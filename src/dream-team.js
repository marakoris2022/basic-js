const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
*
*/

// let Team = ['Olivia', 1111, 'Lily', 'Oscar', true, null, '       Gilles Deleuze','grace',]

function createDreamTeam(members) {
  if (!members || members[0] == null) {
    return false
  } else {
    let newArr = [];
    members.forEach( el => {
      if (typeof el == "string") {
        newArr.push(el)
      }
    })
    newArr = newArr.map(el => {
      let temp;
      temp = el.trim().toUpperCase()
      return temp[0]
    })
    return newArr.sort().join('');
  }
}

// console.log(createDreamTeam(Team));

module.exports = {
  createDreamTeam
};
