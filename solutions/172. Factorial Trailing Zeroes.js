/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result=0;
    let k=parseInt(Math.log(n) / Math.log(5));
    
    for (let i=1;i<=k+1;i++){
        result+=parseInt(n/(Math.pow(5,i)));
    }
    return result;
};
