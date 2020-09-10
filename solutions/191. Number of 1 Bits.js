/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
​
    let str=n.toString(2);
    console.log(str);
    let result=str.match(/1/g);
    
    return result!=null?result.length:0;
};
