/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result=Array.from({length: nums.length}, (_, i) => i + 1);
    let difference = result.filter(x => !nums.includes(x));
    return difference;
    
};
