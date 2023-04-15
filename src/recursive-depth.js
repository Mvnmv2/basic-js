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
class DepthCalculator {
  calculateDepth( arr,  count = 1 ) {/**/
    for(let item of arr){
      if(Array.isArray(item)){
        let count2 = 1
        count2 += this.calculateDepth(item)


        if (count2 >= count) count = count2;
      } else {

        continue
      }

    }

    return count
  }
}

const depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
