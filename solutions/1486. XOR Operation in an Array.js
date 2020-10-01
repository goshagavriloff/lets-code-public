/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr= [...Array(n).keys()]
            .map((el,i)=>{return start+2*i});
    let result=arr.reduce((acc,val)=>{return acc^val},0);
    return result;
    console.log(arr);
};
