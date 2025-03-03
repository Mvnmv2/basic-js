const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let st1 = s1.split('')
  let st2 = s2.split('')
  let count = 0

  loop: for(let i = 0; i < st1.length; i++) {
    for(let j = 0; j < st2.length; j++) {
      if(st1[i] === st2[j]){
        count++
        st2[j] = null
        continue loop
      }
    }
  }

  return count
}

module.exports = {
  getCommonCharacterCount
};
