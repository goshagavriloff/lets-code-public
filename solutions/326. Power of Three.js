/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let log3=Math.log10(n)/Math.log10(3);
    //console.log(log3);
    return log3-Math.floor(log3)==0;
};
