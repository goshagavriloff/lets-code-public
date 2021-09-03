/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums=nums.sort((a,b)=>{return a-b});
    let len=nums.length;
    let [a,b,c,d]=[0,1,len-2,len-1].map((i)=>{return nums[i]});
    return c*d-a*b;
};
