/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let p=(x>0)?1:(n%2==0)?1:-1;
    x=Math.abs(x);
    return p*Math.exp(n*Math.log(x));
};
