/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let str=nums.join('');
    let result=str.match(/1+/g);
    
    if (result==null){return 0}
    
    result=result
                .map((el)=>{return el.length})
                .sort((a,b)=>{return b-a});
    
    return result[0];
};
