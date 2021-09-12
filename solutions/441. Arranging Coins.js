/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let step=1;
    while (n>=step){
        n-=step;
        step++;
    }
    return step-1;
};
