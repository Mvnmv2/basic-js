const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(!parseFloat(sampleActivity) || typeof(sampleActivity) != 'string' || sampleActivity > MODERN_ACTIVITY || sampleActivity < 0) return false

  let n_n0 = parseFloat(sampleActivity)/MODERN_ACTIVITY

  let tilda = HALF_LIFE_PERIOD/0.693

  age = Math.ceil(-tilda * Math.log(n_n0))

  return age
}

module.exports = {
  dateSample
};
