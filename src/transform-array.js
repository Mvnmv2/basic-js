const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    let arrCopy = [];
    let isControlSequence = false
    let discard = false;
    let del = '';
    let double = false;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === undefined) continue;

        if (typeof arr[i] == 'string' ) {

            if(arr[i] === '--double-next') {
                isControlSequence = true
                //     <!-- if(!arr[i + 1]) { -->
                // <!-- continue -->
                // <!-- } -->
                double = true;

            } else if (arr[i] === '--double-prev') {
                isControlSequence = true
                //     <!-- if(!arr[i - 1]) { -->
                // <!-- continue -->
                // <!-- } -->

                if (del === '' && arrCopy.length)
                    arrCopy.push(arrCopy[arrCopy.length-1]);

            } else if (arr[i] === '--discard-next') {
                isControlSequence = true
                    // <!-- if(!arr[i + 1]) { -->
                // <!-- continue -->
                // <!-- } -->
                discard = true

            } else if (arr[i] === '--discard-prev') {
                isControlSequence = true

                //     <!-- if(arr[i - 1]) { -->
                // <!-- discard = true -->
                // <!-- arrCopy[i] = arr[i + 2] -->
                //     <!-- } -->

                if (del === '') {
                    del = arrCopy.pop();
                }


            } else {
                <!-- isControlSequence = true -->

            }


        }


        if(typeof arr[i] != 'string' || !isControlSequence) {
            isControlSequence = false
            if (double) {
                arrCopy.push(arr[i]);

                double = false;
            }

            if (discard) {

                discard = false;
                if (typeof arr[i] == 'number') {
                    del = arr[i];

                    continue
                }

            }

            arrCopy.push(arr[i])
            del = '';
        }

    }



    return arrCopy;



    }

module.exports = {
    transform
};
