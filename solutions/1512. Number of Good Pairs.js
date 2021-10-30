/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result=0;
    let length=nums.length;
    
    for (let i=0;i<length;i++){
        let pairs=nums
                  .slice(i+1)
                  .filter((el)=>{return el==nums[i]});
        result+=pairs.length;
    }
    return result;
};
