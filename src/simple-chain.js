const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (String(value) == 'undefined') value = '' 
    this.chain.push(String(value))
    return this
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.resetChain();
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result =  this.chain.map ( (el , index) => {
      if (this.chain.length == 1) {
        return `( ${el} )`
      }
      if (index == 0) {
        return `( ${el} )~`
      }
      if (index > 0 && index < this.chain.length -1) {
        return `~( ${el} )~`
      }
      if (index == this.chain.length -1 ) {
        return `~( ${el} )`
      }
    }).join('');
    this.resetChain()
    return result;
  },
  resetChain() {
    this.chain = []
  }
  
};

// console.log(chainMaker.addLink('Taras').addLink(null).addLink().removeLink(-1).removeLink(99).removeLink('a').addLink('after empty').finishChain());

module.exports = {
  chainMaker
};
