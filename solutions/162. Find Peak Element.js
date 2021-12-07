/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
    let result=Math.max(...nums);
    return nums.indexOf(result);
};
