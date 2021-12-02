/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length>1){
        let i=nums.length-2;
        let j=nums.length-1;
        for (;i>=0;i--){
            if (nums[i]<nums[i+1]){
                break;
            }
        }
        for (;j>=0;j--){
            if (nums[j]>nums[i]){
                break;
            }
        }
        [nums[i],nums[j]]=[nums[j],nums[i]];
        let arr=nums.slice(i+1).reverse();
        nums.splice(i+1, arr.length, ...arr);
    }
​
};
​
