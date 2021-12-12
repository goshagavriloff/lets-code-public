/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    nums.sort((a,b)=>{
        return Number(BigInt(b)-BigInt(a));
    });
    return nums[k-1];
};
