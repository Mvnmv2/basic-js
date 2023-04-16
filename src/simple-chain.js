const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],



  getLength() {
    return this.chain.length;
  },
  addLink( value = '' ) {
     this.chain.push(`( ${value} )~~`)
     return this;

  },
  removeLink( position ) {
    if(position >= this.chain.length || typeof position !== 'number' || position <= 0) {
      this.chain = []
      throw new Error("You can\'t remove incorrect link!");
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishChain = '';
    for(let i = 0; i < this.chain.length ; i++){

      if(i === this.chain.length - 1){
        let lastChain = this.chain[i].match(/\( .+ \)/)
        finishChain += lastChain[0]
        break
      }

      finishChain += this.chain[i]


    }


    this.chain = [];
    return finishChain;
  }
};

module.exports = {
  chainMaker
};
