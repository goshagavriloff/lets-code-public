/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let size=nums.length;
    let limit=size/3;
    let result=[...new Set(nums)];
    result= result.filter((el,i)=>{
        return nums.filter((item)=>{return el==item}).length>limit;
    });
    return result;
    
};
