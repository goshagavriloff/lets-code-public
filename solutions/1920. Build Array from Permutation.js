/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.reduce((acc,val,i)=>{
        return acc.concat(nums[nums[i]]);
    },[]);
    
};
