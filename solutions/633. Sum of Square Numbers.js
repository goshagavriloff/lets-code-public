/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for (let i=0;i*i<=c;i++){
        let b=Math.sqrt(c-i*i);
        if (b%1==0){
            return true;
        }
    }
    return false;
};
​
​
