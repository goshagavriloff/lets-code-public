/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let arr=[...(new Set(nums))].sort((a,b)=>b-a);
    
    return arr.length<3?arr[0]:arr[2];
};
