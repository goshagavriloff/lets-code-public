/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let result=Array.from({length:n},(v,i)=>{return `${i+1}`});
    return result.sort();
};
