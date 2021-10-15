/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let result=[];
    
    index.forEach((el,i)=>{
        result.splice(el,0,nums[i]);
    });
    
    return result;
};
